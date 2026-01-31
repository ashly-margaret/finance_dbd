# Finance Dashboard (FD)

A modern, responsive finance dashboard application built with **Next.js 15**, **React**, and **TypeScript**. This project features a polished UI with dark mode support, data visualization, and interactive data tables.

## 🎯 Purpose

The primary goal of the **Finance Dashboard** is to provide a centralized, intuitive interface for:

- **Monitoring Financial Health**: Real-time overview of revenue, expenses, and traffic.
- **Data-Driven Decision Making**: Visualizing trends to actionable insights (Paid vs Free users, Monthly Usage).
- **Billing Management**: Simplifying invoice tracking and subscription plan details.
- **User Experience**: Delivering a premium, responsive experience across all devices.

## 🚀 Features

- **Responsive Design**: Fully responsive layout with a mobile-friendly drawer navigation (`Sheet`) and flexible desktop sidebar.
- **Data Visualization**: Interactive charts (Line, Bar, Donut) using **Recharts** to display financial trends, traffic, and revenue breakdown.
- **Dashboard Overview**: Metrics cards with skeleton loading states (`CustomChartSkeleton`) for a smooth user experience.
- **Transactions Management**: Data table with sorting, filtering, and styled status badges using **TanStack Table**.
- **Billing Section**: Manage invoices and billing details with automated downloads.
- **Notifications**: Toast notifications for API errors and updates using **Sonner**.
- **Aesthetic UI**: Custom "Deep Navy" dark theme (`#181D2B`), glassmorphism effects, and refined typography.

## 🛠️ Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/) (Radix UI based)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Charts**: [Recharts](https://recharts.org/)
- **Tables**: [TanStack Table v8](https://tanstack.com/table/v8)
- **Theme**: `next-themes` for dark/light mode management.

## 📂 Project Structure

```
├── app/
│   ├── api/            # API Route handlers (Mocks)
│   ├── dashboard/      # Dashboard pages (Overview, Transactions, Billing)
│   ├── mocks/          # Mock data for charts and tables
│   ├── layout.tsx      # Root layout
│   └── globals.css     # Global styles and Tailwind configuration
├── components/
│   ├── ui/             # Reusable UI components (Button, Sheet, Skeleton, etc.)
│   └── PageHeader.tsx  # Common page header component
├── lib/
│   ├── services/       # Data fetching services
│   ├── type.ts         # TypeScript definitions
│   └── utils.ts        # Utility functions (cn, etc.)
└── public/             # Static assets
```

## ⚡ Getting Started

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/finance-dashboard.git
    cd finance-dashboard
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

4.  **Open your browser:**
    Navigate to [http://localhost:3000/dashboard/overView](http://localhost:3000/dashboard/overView) to see the application in action.

## 🎨 Design System

- **Primary Background**: `#0F1117` (Main Content)
- **Secondary Background**: `#181D2B` (Sidebar, Cards)
- **Accent Color**: Purple `#6E44FF` (Active States, Highlights)
- **Typography**: Inter (via `next/font`)

## 📄 License

This project is open-source and available under the MIT License.
