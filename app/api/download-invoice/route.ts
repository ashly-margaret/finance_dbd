import { billingHistory } from "@/app/mocks/billing"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const id = searchParams.get("id")

  if (!id) {
    return new NextResponse("Invoice ID is required", { status: 400 })
  }

  const invoice = billingHistory.find((inv) => inv.invoiceId === id)

  if (!invoice) {
    return new NextResponse("Invoice not found", { status: 404 })
  }

  // Format currency
  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount)

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Invoice ${invoice.invoiceId}</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f9fafb;
      padding: 40px;
      color: #111827;
    }
    .invoice {
      max-width: 800px;
      margin: auto;
      background: #ffffff;
      padding: 32px;
      border-radius: 8px;
    }
    h1 {
      font-size: 24px;
      margin-bottom: 8px;
    }
    .muted {
      color: #6b7280;
      font-size: 14px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 24px;
    }
    th, td {
      border-bottom: 1px solid #e5e7eb;
      padding: 12px;
      text-align: left;
    }
    th {
      background: #f3f4f6;
      font-size: 13px;
      text-transform: uppercase;
      color: #6b7280;
    }
    .total {
      text-align: right;
      font-size: 18px;
      font-weight: bold;
      margin-top: 24px;
    }
  </style>
</head>
<body>
  <div class="invoice">
    <h1>Invoice</h1>
    <p class="muted">Invoice ID: ${invoice.invoiceId}</p>
    <p class="muted">Billing Period: ${invoice.period}</p>
    <p class="muted">Issued: ${invoice.issuedAt}</p>
    <p class="muted">Status: ${invoice.status}</p>

    <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Quantity</th>
          <th>Rate</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>API Calls (Billable)</td>
          <td>${invoice.billableCalls.toLocaleString()}</td>
          <td>$0.024</td>
          <td>${formatCurrency(invoice.amount)}</td>
        </tr>
        <tr>
          <td>Free Calls</td>
          <td>${invoice.freeCalls.toLocaleString()}</td>
          <td>-</td>
          <td>$0.00</td>
        </tr>
      </tbody>
    </table>

    <div class="total">
      Total Due: ${formatCurrency(invoice.amount)}
    </div>
  </div>
</body>
</html>`

  return new NextResponse(html, {
    headers: {
      "Content-Type": "text/html",
      "Content-Disposition": `attachment; filename="Invoice-${invoice.invoiceId}.html"`,
    },
  })
}
