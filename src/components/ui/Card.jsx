import React from "react";

export const Card = ({ children, className = "" }) => {
  return (
    <div className={`rounded-2xl bg-gray-900 border border-gray-700 shadow-lg ${className}`}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className = "" }) => {
  return <div className={`p-6 ${className}`}>{children}</div>;
};
