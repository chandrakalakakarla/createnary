const sizes = {
    xs: "text-sm font-medium",
    lg: "text-2xl font-normal md:text-[22px]",
    s: "text-base font-medium",
    md: "text-lg font-medium",
  };
  
  const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
    const Component = as || "p";
  
    return (
      <Component className={`text-gray-50 font-urbanist ${className} ${sizes[size]}`} {...restProps}>
        {children}
      </Component>
    );
  };
  
  export { Text };