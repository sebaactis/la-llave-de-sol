

import "@/styles/globals.css";
import { Noto_Sans } from "next/font/google";

import { colors } from "@/utils/colors";

export const metadata: Metadata = {
  title: "La Llave de Sol",
};

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
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
        className={`${notoSans.className} min-h-screen`}
      >
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
