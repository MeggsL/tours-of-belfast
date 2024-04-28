import { Inter } from "next/font/google";
import "./peachypink.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function PeachyLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>

    </html>

  );
}

