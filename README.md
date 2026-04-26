# AAJ Supply Chain - Logistics Order Dashboard
**Developed By**: KARTIK PANDEY

A production-ready, SaaS-grade logistics order form application with real-time live preview capabilities. Built entirely with Next.js and pure CSS Modules, this application allows users to create, manage, and instantly visualize complex shipment invoices dynamically without page reloads.

## 🚀 Features

- **Real-Time Live Preview**: The invoice dashboard instantly mirrors and updates as the user fills out the logistics form, providing immediate visual feedback.
- **Dynamic Package Management**: Add, remove, and track an unlimited number of packages per shipment. Automatically calculates total dimensional weights and values dynamically.
- **SaaS-Level UI/UX**: Clean, card-based layout featuring a professional logistics aesthetic, custom animated components, and soft shadows. 
- **Light & Dark Mode**: Seamless toggle between a crisp Light Mode and an elegant Dark Mode environment.
- **Fluid Responsiveness**: Adapts perfectly across Desktop, Tablet, and Mobile devices with responsive dual-column grid layouts.
- **Micro-Interactions & Animations**: Keyframe-based slide-downs, hover scale effects, and value-change highlights provide natural application physics.
- **Fail-Safe Calculations**: Built-in math utilities securely manage null states, prevent `NaN` returns, and instantly default empty numerical values to zero.
- **Robust State Management**: Built purely on React's `useState` architecture ensuring fast state propogation from deeply nested forms down to the preview pane. 
- **Zero Third-Party UI Libraries**: Completely bespoke CSS Modules architecture. No Tailwind, no Bootstrap, and no heavy form-state libraries used.

## 🛠️ Technology Stack

- **Framework**: [Next.js (App Router)](https://nextjs.org)
- **Styling**: Pure CSS Modules (`.module.css`) + Global CSS Variables
- **Language**: JavaScript (ES6+)
- **Typography**: Inter (Google Fonts)

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css         # Global variables (Colors, spacing, Dark mode root)
│   ├── layout.js           # Next.js root layout and metadata
│   ├── page.js             # Main page container and central state manager
│   └── page.module.css     # Main layout and typography styles
├── components/
│   ├── Form/               # Form entry components
│   │   ├── AdditionalOptions.jsx
│   │   ├── ConsigneeForm.jsx
│   │   ├── ConsignorForm.jsx
│   │   ├── PackageItem.jsx
│   │   ├── PackageList.jsx
│   │   ├── ShipmentDetails.jsx
│   │   └── Form.module.css # Styling for all form inputs & cards
│   └── Preview/            # Live invoice dashboard components
│       ├── PreviewHeader.jsx
│       ├── PreviewPackages.jsx
│       ├── PreviewSenderReceiver.jsx
│       ├── PreviewSummary.jsx
│       └── Preview.module.css # Styling for invoice panels & tags
└── utils/
    ├── calculations.js     # Edge-case safe package aggregate calculators
    └── generateOrderId.js  # Auto-generating ORD-XXXXX IDs
```

## 💻 Getting Started

First, ensure you have Node.js installed, then clone the repository and install the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

## 📦 Building for Production

To build the optimized production version:

```bash
npm run build
```

Then start the production server:

```bash
npm run start
```

## ⚙️ How it Works
The application architecture relies on lifting state to the top-level parent `page.js`. A single, comprehensive `state` object keeps track of standard string properties (Order ID, Dates), nested objects (Consignor/Consignee addresses), and dynamic arrays (Packages). 

As inputs fire `onChange` events, they pass standardized data up to `handleChange` or `handlePackageChange` functions, which safely spread and update the central React state. Because the `<Preview.../>` components share this same state context via props, any mutation on the form side triggers an immediate re-render on the preview side.

## 🤝 Contributions
Feel free to open issues or submit pull requests for any improvements or bug fixes.

---

**© 2026 KARTIK PANDEY** - Designed and Engineered for AAJ Supply Chain.
