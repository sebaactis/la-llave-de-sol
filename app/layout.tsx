

import "@/styles/globals.css";
import { Mona_Sans } from "next/font/google";

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
        
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
