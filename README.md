Finance Dashboard (Next.js + shadcn)

A modern Finance & API Usage Dashboard built using Next.js (App Router) and shadcn UI, showcasing real-world enterprise dashboard features including charts, widgets, tables, filters, loaders, and mock API integrations.

🚀 Tech Stack

Next.js (App Router, TypeScript)

shadcn UI

Tailwind CSS

Recharts (Charts)

Mock APIs (Next.js Route Handlers)


🎯 Key Features

KPI widgets (cards)

Trend charts (Line, Bar, Pie)

Transaction summary tables

Filters with loader states

Tab-based navigation

Unique vs Non-Unique views

Mock API integration with artificial delays

Skeleton & spinner loaders

Light/Dark mode support


📊 Dashboard Pages
1. Overview

KPI cards (Total Calls, Revenue, APIs)

Monthly usage trend (Line chart)

Paid Calls by Type (Bar chart)

Unique vs Non-Unique (Pie chart)

2. Transactions

Filter bar (Client, Channel, Date)

Tab-wise channel view

Transaction summary table

Unique transaction toggle

Loader inside dropdowns

3. APIs

API usage cards

Stacked bar (Paid vs Free)

Error rate indicators

4. Billing

Invoice table

Status badges (Paid / Pending / Rejected)

Revenue trend chart

Invoice preview modal

5. Settings

Theme toggle

Notification toggle

User profile section


🧪 Mock APIs
Endpoint	Description
/api/overview	KPI metrics
/api/charts	Chart data
/api/transactions	Transaction table
/api/apis	API usage
/api/billing	Invoice data

Each API simulates:

Network delay

Loading state

Empty state

Error handling


🧠 Learning Goals

Build production-style dashboards

Practice state management

Integrate charts with UI components

Design scalable UI architecture

Handle slow APIs gracefully


🌱 Future Enhancements

CSV export

Saved filters

Role-based access

Real-time updates

Drill-down charts