import { useCart } from "../context/CartContext";
import { RiCloseCircleFill, RiArrowLeftLine } from "@remixicon/react";
import { useNavigate } from "react-router-dom";
import QuantityStepper from "./QuantityStepper";
import InputOrderReceipt from "./InputOrderReceipt";
import InputOrderNote from "./InputOrderNote";
import { useState } from "react";

export default function Cart() {
  const { cart, removeFromCart, totalPrice } = useCart();
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    console.log("Checkout diklik")
    if (cart.length === 0) return;
    setLoading(true);

    try {
      // 1️⃣ Buat transaksi di backend
      const response = await fetch("http://localhost:5000/create-transaction", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderId: `ORDER-${Date.now()}`,
          grossAmount: totalPrice,
          customerName: "Taufikhan Rayana", // nanti bisa ambil dari input user
        }),
      });

      const data = await response.json();

      if (!window.snap) {
        alert("Midtrans Snap belum siap! Coba refresh halaman.");
        setLoading(false);
        return;
      }

      // 2️⃣ Tampilkan popup Midtrans
      window.snap.pay(data.token, {
        onSuccess: function (result) {
          console.log("✅ Payment success:", result);
          alert("Pembayaran berhasil!");
        },
        onPending: function (result) {
          console.log("⏳ Payment pending:", result);
          alert("Menunggu pembayaran...");
        },
        onError: function (result) {
          console.log("❌ Payment error:", result);
          alert("Terjadi kesalahan saat pembayaran!");
        },
        onClose: function () {
          console.log("🧭 Payment popup closed");
          alert("Kamu menutup jendela pembayaran.");
        },
      });
    } catch (error) {
      console.error("Gagal membuat transaksi:", error);
      alert("Terjadi kesalahan!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-stone-50 pt-4 px-5 pb-30 flex flex-col">
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

      <div className="fixed bottom-0 left-0 w-full h-30 bg-white p-4 rounded-t-2xl inset-shadow-2xs">
        <div className="flex justify-between mb-3">
          <p className="text-base font-bold text-stone-900">Total</p>
          <p className="text-base font-bold text-stone-800">
            Rp {totalPrice.toLocaleString()}
          </p>
        </div>
        <button
          onClick={handleCheckout}
          disabled={cart.length === 0 || loading}
          className="w-full bg-[#747934] text-white py-3 rounded-xl text-base font-semibold hover:bg-[#5c602b] transition-colors"
        >
          {loading ? "Memproses..." : "Checkout Sekarang"}
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
