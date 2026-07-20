import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const SITE_NAME = "Life Unlimited";
const SITE_DESCRIPTION =
  "Life Unlimited offers therapy and counselling to individuals, couples, and families in Canberra, plus tailored workshops, seminars and training programs for organisations.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Psychology and Counselling Canberra | Life Unlimited",
    template: "%s | Life Unlimited",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "psychologist Canberra",
    "counselling Canberra",
    "psychology",
    "mental health",
    "workplace training",
    "resilience workshops",
    "Life Unlimited",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Psychology and Counselling Canberra | Life Unlimited",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/images/home-banner.jpg",
        width: 2560,
        height: 1200,
        alt: "Life Unlimited Health Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psychology and Counselling Canberra | Life Unlimited",
    description: SITE_DESCRIPTION,
    images: ["/images/home-banner.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/favicon-32.png",
    apple: "/images/favicon-192.png",
  },
  formatDetection: {
    telephone: true,
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: "Life Unlimited Health Solutions",
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  logo: `${SITE_URL}/images/headerLogo.jpeg`,
  image: `${SITE_URL}/images/home-banner.jpg`,
  telephone: "+61262485138",
  email: "info@lifeunlimited.com.au",
  foundingDate: "2001",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Unit 1/9 McKay Street, Southern Cross House",
    addressLocality: "Turner",
    addressRegion: "ACT",
    postalCode: "2612",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -35.2718,
    longitude: 149.1245,
  },
  sameAs: [
    "https://www.facebook.com/LifeUnlimitedHealthSolutions",
    "https://www.instagram.com/lifeunlimitedpsychology/",
  ],
  medicalSpecialty: "Psychiatric",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
        <Header />
        <main className="flex-1 pt-[88px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
