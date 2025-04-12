import React from "react";

export function ResetCount({ setCount }) {
  const handleReset = () => {
    setCount(0);
  };

  return (
    <button onClick={handleReset}>
      Reset Counter
    </button>
  );
}

