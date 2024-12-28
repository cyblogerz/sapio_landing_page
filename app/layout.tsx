import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { Navbar } from "@/components/Navbar";
import './index.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body>
        <ThemeProvider>
        <Navbar />
        {children}
        </ThemeProvider>
        </body>
    </html>
  );
}
