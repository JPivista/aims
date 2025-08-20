import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go"

const Button = ({
  children,
  onClick,
  className = "",
  variant = "primary",
  showArrow = true,
  showReadMore = false,
  hoverText,
  href, // added
  ...props
}) => {
  const baseClasses =
    "px-3 py-1.5 rounded-[20px] font-light transition-all duration-300 ease-in-out border-2 flex items-center justify-center gap-1 group relative overflow-hidden"

  const variants = {
    primary:
      "bg-[#A22977] text-white border-[#A22977] border-[0.1px] hover:bg-transparent hover:text-[#2828A2]",
    secondary:
      "bg-white text-[#2828A2] border-white border-[0.1px] hover:bg-transparent hover:text-white",
    third:
      "bg-[#A22977] text-white border-[#A22977] border-[0.1px] hover:bg-transparent",
    teal: "bg-[#B3DBD3] text-[#002561] border-[#B3DBD3] border-[0.1px] hover:bg-transparent hover:text-[#002561]",
  }

  const buttonClasses = `${baseClasses} ${variants[variant]} ${className}`

  const content = (
    <>
      {/* Original content */}
      <span
        className={`transition-all duration-300 ease-in-out ${
          showReadMore
            ? "group-hover:opacity-0 group-hover:-translate-y-2 cursor-pointer"
            : ""
        }`}
      >
        {children}
      </span>

      {/* Read More text - appears on hover */}
      {showReadMore && (
        <span className="absolute text-xl transition-all duration-300 ease-in-out opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 cursor-pointer">
          {hoverText}
        </span>
      )}

      {showArrow && (
        <div className="relative flex items-center">
          <GoArrowDownRight className="w-5 h-5 text-current transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:rotate-12 group-hover:scale-75" />
          <GoArrowUpRight className="w-5 h-5 text-current absolute top-0 left-0 transition-all duration-300 ease-in-out opacity-0 -rotate-12 scale-75 group-hover:opacity-100 group-hover:rotate-0 group-hover:scale-100 cursor-pointer" />
        </div>
      )}
    </>
  )

  // If href is present, render <a>, else <button>
  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonClasses}
      {...props}
    >
      {content}
    </a>
  ) : (
    <button onClick={onClick} className={buttonClasses} {...props}>
      {content}
    </button>
  )
}

export default Button
