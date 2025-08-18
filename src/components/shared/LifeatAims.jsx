import React from "react"
import Image from "next/image"

const LifeatAims = ({ alumniData, title, backgroundColor = "" }) => {
  // Handle case when alumniData is undefined or empty
  if (!alumniData) {
    return (
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-[#0C2165] text-2xl lg:text-3xl font-bold mb-4">
              {title || "Alumni Section"}
            </h3>
            <p className="text-gray-600">Alumni data not available.</p>
          </div>
        </div>
      </div>
    )
  }

  // Function to render description as multiple paragraphs
  const renderDescription = (description) => {
    if (typeof description === "string") {
      const paragraphs = description.split(/\n\s*\n/)
      return paragraphs.map((paragraph, index) => {
        const trimmedParagraph = paragraph.trim()
        if (trimmedParagraph) {
          return (
            <p
              key={index}
              className="text-black/90 text-base lg:text-lg mb-4 leading-relaxed"
            >
              {trimmedParagraph}
            </p>
          )
        }
        return null
      })
    }

    if (Array.isArray(description)) {
      return description.map((paragraph, index) => {
        const hasHTML = /<[^>]*>/.test(paragraph)
        if (hasHTML) {
          const styledParagraph = paragraph
            .replace(/<b>/g, '<b style="color: #FFD700; font-weight: bold;">')
            .replace(
              /<strong>/g,
              '<strong style="color: #FFD700; font-weight: bold;">'
            )
          return (
            <p
              key={index}
              className="text-black text-base lg:text-lg mb-4 leading-relaxed"
            >
              <span dangerouslySetInnerHTML={{ __html: styledParagraph }} />
            </p>
          )
        } else {
          return (
            <p
              key={index}
              className="text-black text-base lg:text-lg mb-4 leading-relaxed"
            >
              {paragraph}
            </p>
          )
        }
      })
    }

    return (
      <p className="text-black/90 text-base lg:text-lg mb-6 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: description }} />
      </p>
    )
  }

  return (
    <div className="bg-[#E0F8F3] pb-10 w-full">
      <div className="md:w-full w-full container mx-auto">
        <section>
          <div
            className={`bg-[${backgroundColor}] rounded-2xl overflow-hidden`}
          >
            <div className="flex flex-col lg:flex-row items-center md:p-8 p-4 gap-8">
              {/* Image */}
              <div className="flex justify-center lg:w-30%">
                <div className="relative">
                  <div className="w-72 h-72 lg:w-80 lg:h-80 flex items-center justify-center">
                    <div className="w-full h-full rounded-full overflow-hidden p-4 flex items-center justify-center">
                      <Image
                        src={alumniData.image}
                        alt={alumniData.subtitle}
                        width={320}
                        height={320}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="text-black lg:w-70% space-y-4">
                <h3
                  className="text-[#0C2165] text-2xl lg:text-3xl font-bold mb-6"
                  dangerouslySetInnerHTML={{ __html: alumniData.subtitle }}
                />

                {/* Render description */}
                <div className="space-y-4">
                  {renderDescription(alumniData.description)}
                </div>

                {/* Render list & author together */}
                {Array.isArray(alumniData.listItems) &&
                  alumniData.listItems.length > 0 && (
                    <>
                      <ul className="list-disc list-inside text-black/90 text-base lg:text-lg mt-4 space-y-2">
                        {alumniData.listItems.map((item, index) => (
                          <li
                            key={index}
                            dangerouslySetInnerHTML={{ __html: item }}
                          />
                        ))}
                      </ul>

                      {/* Author right after list */}
                      {alumniData.author && (
                        <div className="mt-6">
                          <p className="text-black  font-semibold leading-relaxed">
                             {alumniData.author}
                          </p>
                       
                        </div>
                      )}
                    </>
                  )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default LifeatAims
