import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "XGMS — Global EMR SaaS Platform",
  description:
    "Cloud-based Electronic Medical Record platform with Clinical Safety, Privacy by Design, and Global Compliance.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}