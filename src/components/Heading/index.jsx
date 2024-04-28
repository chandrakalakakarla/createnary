
const sizes = {
    s: "text-[22px] font-bold",
    md: "text-[27px] font-bold md:text-[25px] sm:text-[23px]",
    xs: "text-base font-semibold",
    lg: "text-[40px] font-bold md:text-[38px] sm:text-4xl",
  };
  
  const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
    const Component = as || "h6";
  
    return (
      <Component className={`text-gray-900 font-urbanist ${className} ${sizes[size]}`} {...restProps}>
        {children}
      </Component>
    );
  };
  
  export { Heading };
  