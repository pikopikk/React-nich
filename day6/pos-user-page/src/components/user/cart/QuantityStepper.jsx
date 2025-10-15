import { RiAddFill, RiSubtractFill } from "@remixicon/react";
import { useCart } from "../context/CartContext";

export default function QuantityStepper({ itemId, initial = 1, min = 1, max = 10 }) {
  const { cart, updateQty } = useCart();
  const item = cart.find((i) => i.id === itemId);
  const qty = item ? item.qty : initial;

  const increment = () => {
    const newQty = Math.min(qty + 1, max);
    updateQty(itemId, newQty);
  };

  const decrement = () => {
    const newQty = Math.max(qty - 1, min);
    updateQty(itemId, newQty);
  };

  return (
    <div className="flex flex-row items-center pt-4 gap-2">
      <button
        className="bg-[#BCA88D]/35 w-6 h-6 rounded-3xl"
        onClick={decrement}
        disabled={qty <= min}
      >
        <RiSubtractFill className="w-6 h-6 text-stone-900" />
      </button>

      <input
        type="text"
        className="input input-sm w-12 text-center bg-transparent text-stone-900 text-lg"
        value={qty}
        readOnly
      />

      <button
        className="bg-[#BCA88D]/35 w-6 h-6 rounded-3xl"
        onClick={increment}
        disabled={qty >= max}
      >
        <RiAddFill className="w-6 h-6 text-stone-900" />
      </button>
    </div>
  );
}
