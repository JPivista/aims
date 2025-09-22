"use client"
import Head from "next/head"
import React from "react"

function Seo({
  title,
  description,
  path,
  metaImage,
  schemaType = "WebSite",
  additionalSchema = {},
}) {
  // Use environment variable instead of window.location
  const domainName =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com"

  // Base schema for AIMS Institutes
  const baseSchema = {
    "@context": "https://schema.org/",
    "@type": schemaType,
    name: "AIMS Institutes",
    url: `${domainName}${path}`,
    description: description,
    ...additionalSchema,
  }

  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon-96x96.png" />
      <link rel="canonical" href={`${domainName}${path}`} />

      {/* Open Graph */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${domainName}${path}`} />
      <meta property="og:site_name" content="AIMS Institutes" />
      <meta
        property="og:image"
        content={metaImage || "/images/aims-logo.png"}
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={metaImage || "/images/aims-logo.png"}
      />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(baseSchema),
        }}
      />
    </Head>
  )
}

export default Seo
