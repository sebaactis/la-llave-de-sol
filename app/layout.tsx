

import { Mona_Sans } from "next/font/google";
import { Metadata } from "next";

import { NavbarComponent } from "@/components/NavbarComponent";
import NewsletterPopup from "@/components/NewsletterPopup";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "La Llave de Sol",
};

const monoSans = Mona_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${monoSans.className} min-h-screen`}
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
