import RefundAndCancellations from "@/components/RefundAndCancellations"
import Seo from "@/components/shared/Seo/Seo"

export default function RefundCancellationsPage() {
  const seoField = {
    title: "Refund & Cancellations | Top B School in India",
    description: "Understand the Refund & Cancellations policy of a Top B School in India. A grade colleges in Bangalore like AIMS ensure clarity and student-first practices.",
    path: "/refund-cancellations",
    metaImage: "/images/aims-logo.png",
    pageType: "WebSite",
  }

  return (
    <>
      <Seo {...seoField} />
      <RefundAndCancellations />
    </>
  )
}
