"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { usePathname } from "next/navigation"

const Breadcrumbs = () => {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(false)

  // Show breadcrumbs after scrolling 20% of viewport height
  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.2;
      setIsVisible(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle home link click and ensure scroll to top
  const handleHomeClick = () => {
    // Force scroll to top after a short delay to ensure navigation completes
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 15);
  };

  // Generate breadcrumbs from pathname
  const generateBreadcrumbs = () => {
    const pathSegments = pathname.split("/").filter((segment) => segment !== "")

    if (pathSegments.length === 0) return []

    // Special case for Eresources page
    if (pathname.includes("eresources")) {
      return [
        {
          label: "Library and Information Centre",
          href: "/library-and-information-centre",
          isLast: false,
        },
        {
          label: "Eresources",
          href: pathname,
          isLast: true,
        },
      ]
    }

    const breadcrumbs = []
    let currentPath = ""

    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`

      // Convert segment to readable label
      const label = segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")

      breadcrumbs.push({
        label,
        href: currentPath,
        isLast: index === pathSegments.length - 1,
      })
    })

    return breadcrumbs
  }

  const breadcrumbs = generateBreadcrumbs()

  return (
    <>
      <div className="">
        <nav className={`bg-white shadow-sm border-b border-gray-100 px-4 lg:px-8 sticky lg:top-[17vh] top-[10vh] z-40 transition-all duration-300 ${isVisible ? 'opacity-100 h-auto' : 'opacity-0 h-0 pointer-events-none overflow-hidden border-0'}`}>
          <div className="max-w-screen-xl lg:max-w-screen-2xl mx-auto px-4 lg:px-0">
            <div className="flex items-center space-x-2 py-3 overflow-x-auto scrollbar-hide">
              {/* Mobile scroll indicator */}
              {/* <div className="lg:hidden flex-shrink-0 mr-2 text-xs text-gray-400">
                        ← Scroll →
                    </div> */}
              {/* Home Link */}
              <Link
                href="/"
                scroll={false}
                onClick={handleHomeClick}
                className="flex items-center text-gray-600 hover:text-[#A22877] transition-colors duration-200 group flex-shrink-0"
              >
                <Home className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-sm font-medium">Home</span>
              </Link>

              {/* Breadcrumb Separator and Items */}
              {breadcrumbs.map((breadcrumb, index) => (
                <React.Fragment key={index}>
                  <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  {breadcrumb.isLast ? (
                    // Last item (current page) - no link, different styling
                    <span className="text-sm font-bold text-[#A22877] flex-shrink-0">
                      {breadcrumb.label}
                    </span>
                  ) : (
                    // Clickable breadcrumb items
                    <Link
                      href={breadcrumb.href}
                      className="text-sm text-gray-600 hover:text-[#A22877] transition-colors duration-200 hover:underline flex-shrink-0"
                    >
                      {breadcrumb.label}
                    </Link>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Custom scrollbar styles */}
          <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        /* Smooth scrolling for mobile */
        @media (max-width: 1024px) {
          .scrollbar-hide {
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
          }
        }
      `}</style>
        </nav>
      </div>
    </>
  )
}

export default Breadcrumbs
