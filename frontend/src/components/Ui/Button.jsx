import React from "react";

const Button = ({
  children,
  variant = "primary",
  size = "default",
  icon: Icon,
  className = "",
  ...props
}) => {
  const baseClasses =
    "font-semibold transition-all flex items-center justify-center gap-2";

  const variants = {
    primary:
      "bg-gradient-to-r from-gpred-500 to-gporange-500 text-white hover:from-gpred-700 hover:to-gporange-700",
    secondary:
      "bg-gpdark border border-gpred-500 text-gpred-500 hover:bg-gpred-500/10",
    outline:
      "border border-gpgray/30 text-gpgray hover:border-gpred-500 hover:text-white",
  };

  const sizes = {
    default: "px-4 py-2 rounded-full",
    large: "px-6 py-3 rounded-lg",
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
      {Icon && <Icon className="w-4 h-4" />}
    </button>
  );
};

export default Button;
