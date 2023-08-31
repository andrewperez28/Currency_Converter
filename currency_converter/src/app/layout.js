import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Currency Converter",
  description: "Created by Andrew Perez",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-800 text-slate-100 mx-auto container p-4`}
      >
        {children}
      </body>
    </html>
  );
}
