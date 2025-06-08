import type React from "react"
import type { Metadata } from "next"
import { Inconsolata } from "next/font/google"
import "./globals.css"

const inconsolata = Inconsolata({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AGUS PECCI PHOTOGRAPHY - Fotógrafo Deportivo Profesional en Barcelona | Servicios de Fotografía Deportiva",
  description:
    "Fotógrafo deportivo profesional en Barcelona especializado en fotografía deportiva, sesiones de entrenamiento, competiciones y fotografía de equipo. Capturando tu historia atlética con pasión y experiencia.",
  keywords:
    "fotógrafo deportivo Barcelona, fotografía deportiva Barcelona, fotógrafo profesional Barcelona, fotografía deportiva España, fotografía de sesiones de entrenamiento, fotografía de competición Barcelona, fotografía de equipo Barcelona, fotografía fitness, fotografía de gimnasio Barcelona",
  authors: [{ name: "AGUS PECCI PHOTOGRAPHY" }],
  creator: "AGUS PECCI PHOTOGRAPHY",
  publisher: "AGUS PECCI PHOTOGRAPHY",
  openGraph: {
    title: "AGUS PECCI PHOTOGRAPHY - Fotógrafo Deportivo Profesional en Barcelona",
    description:
      "Fotógrafo deportivo profesional en Barcelona especializado en fotografía deportiva, sesiones de entrenamiento, competiciones y fotografía de equipo.",
    url: "https://aguspecci.com",
    siteName: "AGUS PECCI PHOTOGRAPHY",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/images/athlete-track-sitting.jpg",
        width: 1200,
        height: 630,
        alt: "Fotografía deportiva profesional por Agus Pecci en Barcelona",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AGUS PECCI PHOTOGRAPHY - Fotógrafo Deportivo Profesional en Barcelona",
    description:
      "Fotógrafo deportivo profesional en Barcelona especializado en fotografía deportiva, sesiones de entrenamiento, competiciones y fotografía de equipo.",
    images: ["/images/athlete-track-sitting.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://aguspecci.com" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="geo.region" content="ES-CT" />
        <meta name="geo.placename" content="Barcelona" />
        <meta name="geo.position" content="41.3851;2.1734" />
        <meta name="ICBM" content="41.3851, 2.1734" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://aguspecci.com",
              name: "AGUS PECCI PHOTOGRAPHY",
              image: "https://aguspecci.com/images/athlete-track-sitting.jpg",
              description:
                "Fotógrafo deportivo profesional en Barcelona especializado en fotografía deportiva, sesiones de entrenamiento, competiciones y fotografía de equipo.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Barcelona",
                addressRegion: "Cataluña",
                addressCountry: "ES",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 41.3851,
                longitude: 2.1734,
              },
              url: "https://aguspecci.com",
              telephone: "+34624629701",
              priceRange: "€€",
              openingHours: "Mo-Su 08:00-20:00",
              serviceArea: {
                "@type": "City",
                name: "Barcelona",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servicios de Fotografía Deportiva",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Fotografía de Sesiones de Entrenamiento",
                      description: "Fotografía profesional para sesiones de entrenamiento atlético",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Fotografía de Competición",
                      description: "Fotografía profesional de competiciones y eventos deportivos",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Retratos Atléticos",
                      description: "Sesiones profesionales de retratos atléticos",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={inconsolata.className}>{children}</body>
    </html>
  )
}
