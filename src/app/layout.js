import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Logistics Order | AAJ Supply Chain",
  description: "Create and preview your logistics shipments in real-time. Manage consignor, consignee, and multiple packages effortlessly.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
