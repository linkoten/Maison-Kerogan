"use client";

import React from "react";

const ReservationButton = ({
  className = "",
  size = "default",
  variant = "default",
  children,
  ...props
}) => {
  const baseClasses =
    "group inline-flex items-center gap-3 font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg border-2 border-transparent hover:border-white";

  const sizeClasses = {
    small: "py-2 px-4 text-xs md:text-sm",
    default: "py-3 px-6 text-sm md:text-base",
    large: "py-4 px-8 text-base md:text-lg",
  };

  const variantClasses = {
    default: "bg-ocre hover:bg-ocre2 text-white hover:shadow-ocre/50",
    compact:
      "bg-ocre hover:bg-ocre2 text-white hover:shadow-ocre/50 py-2 px-4 text-sm",
    header:
      "bg-ocre hover:bg-ocre2 text-white hover:shadow-ocre/50 py-2 px-3 text-xs sm:text-sm",
    midi: "bg-vert hover:bg-vert2 text-white hover:shadow-vert/50 py-2 px-4 text-sm",
  };

  const finalClassName = `${baseClasses} ${
    sizeClasses[size] || sizeClasses.default
  } ${variantClasses[variant] || variantClasses.default} ${className}`.trim();

  return (
    <a
      href="https://bookings.zenchef.com/results?rid=380742"
      target="_blank"
      rel="noopener noreferrer"
      className={finalClassName}
      {...props}
    >
      {children || (
        <>
          <span>Réserver une table</span>
          <svg
            className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </>
      )}
    </a>
  );
};

export default ReservationButton;
