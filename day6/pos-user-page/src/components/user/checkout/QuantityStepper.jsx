import { useState } from "react";

export default function QuantityStepper({ initial = 1, min = 1, max = 10 }) {
  const [qty, setQty] = useState(initial);

  const increment = () => setQty((prev) => Math.min(prev + 1, max));
  const decrement = () => setQty((prev) => Math.max(prev - 1, min));

  return (
    <div className="flex items-center gap-2">
      <button
        className="btn btn-sm"
        onClick={decrement}
        disabled={qty === min}
      >
        -
      </button>
      <input
        type="text"
        className="input input-sm w-12 text-center"
        value={qty}
        readOnly
      />
      <button
        className="btn btn-sm"
        onClick={increment}
        disabled={qty === max}
      >
        +
      </button>
    </div>
  );
}
