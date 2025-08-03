import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Riad Eid",
  description: "برنامج متخصص بنسبة نجاح 95% لتحديد جنس المولود بإشراف فريق طبي متخصص.",
  icons: {
    icon: "/favicon.png",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${ibmPlexSansArabic.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

