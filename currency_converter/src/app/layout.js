import "./globals.css";
import Providers from "./providers";
import ThemeSwitcher from "./Components/ThemeSwitcher";

export const metadata = {
  title: "Currency Converter",
  description: "Created by Andrew Perez",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="container mx-auto p-4">{children}</body>
    </html>
  );
}
