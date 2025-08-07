import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go";

const Button = ({
  children,
  onClick,
  className = "",
  variant = "primary",
  showArrow = true,
  showReadMore = false,
  hoverText,
  ...props
}) => {
  const baseClasses =
    "px-5 py-1.5 rounded-[20px] font-light transition-all duration-300 ease-in-out border-2 flex items-center justify-center gap-1 group relative overflow-hidden";

  const variants = {
    primary:
      "bg-[#A22977] text-white border-[#A22977] border-[0.1px] hover:bg-transparent hover:text-[#2828A2]",
    secondary:
      "bg-white text-[#2828A2] border-white border-[0.1px] hover:bg-transparent hover:text-white",
  };

  const buttonClasses = `${baseClasses} ${variants[variant]} ${className}`;

  return (
    <button className={buttonClasses} onClick={onClick} {...props}>
      {/* Original content */}
      <span className={`text-xl transition-all duration-300 ease-in-out ${showReadMore ? 'group-hover:opacity-0 group-hover:-translate-y-2' : ''}`}>
        {children}
      </span>
      
      {/* Read More text - appears on hover */}
      {showReadMore && (
        <span className="absolute text-xl transition-all duration-300 ease-in-out opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
          {hoverText}
        </span>
      )}
      
      {showArrow && (
        <div className="relative">
          {/* Down-right arrow - visible by default */}
          <GoArrowDownRight className={`w-5 h-5 transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:rotate-12 group-hover:scale-75 ${className}`} />
          {/* Up-right arrow - visible on hover */}
          <GoArrowUpRight className="w-5 h-5 absolute top-0 left-0 transition-all duration-300 ease-in-out opacity-0 -rotate-12 scale-75 group-hover:opacity-100 group-hover:rotate-0 group-hover:scale-100" />
        </div>
      )}
    </button>
  );
};

export default Button;