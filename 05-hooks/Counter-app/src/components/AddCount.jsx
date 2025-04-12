
import React from "react";

export function AddCount({ count, setCount }) {
  const handleClick = () => {
    if (count >= 20) {
      setCount(count);
    } else {
      setCount(count + 1);
    }
  };

  return (
    <button onClick={handleClick}>
      Add Count {count}
    </button>
  );
}

