import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "कञ्चन म:म प्रोडक्सन | उच्च गुणस्तरको थोक तथा खुद्रा म:म",
  description:
    "काठमाडौँको उत्कृष्ट म:म उत्पादन केन्द्र। हामी थोक र खुद्रा दुबैका लागि ताजा र स्वादिलो म:म उपलब्ध गराउँछौँ। बुढानिलकण्ठ-१०, काठमाडौँ।",
  keywords: ["Momo", "Kanchan Momo", "Wholesale Momo Kathmandu", "Nepali Momo", "Best Momo in Nepal"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ne"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-[#09090b] text-white selection:bg-primary selection:text-black" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

