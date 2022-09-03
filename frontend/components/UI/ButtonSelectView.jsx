import React from "react";

function BSelectView({ children, active, func }) {
  return (
    <button
      onClick={func}
      className={`p-2 py-4 text-sm md:text-base ${
        active && "border-b-2 border-blue-700 text-blue-700"
      }`}
    >
      {children}
    </button>
  );
}

export default BSelectView;
