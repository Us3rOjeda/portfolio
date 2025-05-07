import type { Metadata } from "next";
import { inter } from "../../public/fonts/fonts";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Front-End Portfolio Web",
  description: "My front-end portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#f6f4f4] text-[#090b0b]`}>
        {children}
      </body>
    </html>
  );
}
