const Button = ({
  onClick,
  children,
  variant = "primary",
  block = false,
  className = "",
  ...rest
}) => {
  const style = {
    primary:
      "bg-SoftBlue text-white hover:border-SoftBlue hover:text-SoftBlue hover:bg-transparent",
    secondary:
      "bg-gray-100 text-VeryDarkBlue hover:border-gray-700 hover:text-gray-700 hover:bg-transparent",
    danger:
      "bg-SoftRed text-white hover:border-SoftRed hover:text-SoftRed hover:bg-white",
  };
  return (
    <button
      {...rest}
      className={` px-4 py-[11px] border-2 border-transparent  shadow-lg rounded-md transition ${
        style[variant]
      } ${block && "w-full"} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
