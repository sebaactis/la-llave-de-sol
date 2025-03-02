

import { Metadata } from "next";

import { NavbarComponent } from "@/components/NavbarComponent";
import NewsletterPopup from "@/components/NewsletterPopup";
import "@/styles/globals.css";
import { monoSans } from "@/utils/typographies";

export const metadata: Metadata = {
  title: "La Llave de Sol",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning className="scroll-smooth" lang="en">
      <body
        className={`${monoSans.className} min-h-screen `}
      >
        <NavbarComponent />
        <main>
          <NewsletterPopup />
          {children}
        </main>
      </body>
    </html>
  );
}
