import React from "react";

const Button = ({
  children,
  variant = "primary",
  size = "default",
  icon: Icon,
  className = "",
  onClick,
  ...props
}) => {
  const baseClasses =
    "font-semibold transition-all flex items-center justify-center gap-2";

  const variants = {
    primary:
      "bg-gradient-to-r from-gpred-300 to-gporange-300 text-white shadow-gpglow-md hover:from-gpred-500 hover:to-gporange-500 hover:shadow-gpglow-lg",
    secondary:
      "border border-gpred-500 text-gporange-500 hover:text-white hover:bg-gradient-to-r hover:from-gpred-300/30 hover:to-gporange-300/30",
    outline:
      "border border-gpgray/30 text-gpgray hover:border-gpred-500 hover:text-white",
  };

  const sizes = {
    default: "px-4 py-2 rounded-full",
    large: "px-6 py-3 rounded-lg",
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={classes} {...props} onClick={onClick}>
      {children}
      {Icon && <Icon className="w-4 h-4" />}
    </button>
  );
};

export default Button;
