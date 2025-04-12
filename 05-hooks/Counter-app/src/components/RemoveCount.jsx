import React from "react";

export function RemoveCount({ count, setCount }) {
  const handleClick = () => {
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <button onClick={handleClick}>
      Remove Count {count}
    </button>
  );
}
