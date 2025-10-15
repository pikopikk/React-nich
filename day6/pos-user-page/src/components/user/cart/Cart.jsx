import { useCart } from "../context/CartContext";
import { RiCloseCircleFill, RiArrowLeftLine } from "@remixicon/react";
import { useNavigate } from "react-router-dom";
import QuantityStepper from "./QuantityStepper";
import InputOrderReceipt from "./InputOrderReceipt";
import InputOrderNote from "./InputOrderNote";

export default function Cart() {
  const { cart, removeFromCart, totalPrice } = useCart();

  return (
    <section className="relative w-full min-h-screen bg-stone-50 py-4 px-5 flex flex-col">
      <CartBackButton />

      <h1 className="text-2xl font-bold text-stone-900 py-2 text-center">
        Pesanan Kamu
      </h1>

      <div className="flex flex-col gap-3 py-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-white rounded-2xl shadow p-3"
          >
            <div className="flex flex-col">
              <p className="font-bold text-base text-stone-900">{item.name}</p>
              <p className="text-sm text-stone-600">
                Rp {item.price.toLocaleString()}
              </p>
              <p className="text-sm font-bold text-stone-900 pt-2">
                Subtotal: Rp {(item.price * item.qty).toLocaleString()}
              </p>
              <QuantityStepper itemId={item.id} />
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-error hover:text-red-600 p-1 rounded-full"
            >
              <RiCloseCircleFill />
            </button>
          </div>
        ))}

        {cart.length === 0 && (
          <p className="text-center text-stone-600 text-sm mt-5">
            Keranjang kosong.
          </p>
        )}
      </div>

      <InputOrderNote />
      <InputOrderReceipt />

      <div className="mt-auto bg-white p-4 rounded-2xl shadow-md">
        <div className="flex justify-between mb-3">
          <p className="text-base font-bold text-stone-900">Total</p>
          <p className="text-base font-bold text-stone-800">
            Rp {totalPrice.toLocaleString()}
          </p>
        </div>
        <button
          className="w-full bg-[#747934] text-white py-3 rounded-xl text-base font-semibold hover:bg-[#5c602b] transition-colors"
          disabled={cart.length === 0}
        >
          Checkout Sekarang
        </button>
      </div>
    </section>
  );
}

function CartBackButton() {
  const navigate = useNavigate();
  const handleCancel = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <button
      onClick={handleCancel}
      className="absolute top-5 left-5 text-3xl bg-stone-900/60 p-1 rounded-4xl text-white cursor-pointer btn-press"
    >
      <RiArrowLeftLine className="w-6 h-6" />
    </button>
  );
}
