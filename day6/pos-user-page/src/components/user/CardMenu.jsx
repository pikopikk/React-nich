// src/components/user/CardMenu.jsx
import { RiShoppingCartLine, RiStarFill, RiQuillPenFill } from "@remixicon/react";
import { useCart } from "./context/CartContext";
import { useNavigate } from "react-router-dom";

export default function CardMenu({ id, title, image, price, isBest = false, isSignature = false, tersedia = true, className = '' }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleCartClick = (e) => {
    e.stopPropagation(); // cegah navigasi ke detail
    if (!tersedia) return;
    addToCart({ id, name: title, image, price });
  };

  const handleCardClick = () => {
    navigate(`/InformasiMenu/${id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className={`mt-2 ease-out duration-300 hover:scale-105 w-36 min-h-58 cursor-pointer ${className}`}
    >
      <div className="card bg-white w-full h-full shadow-sm">
        <figure className="relative">
          <button
            onClick={handleCartClick}
            className="bg-stone-900/60 p-1 rounded-2xl absolute top-2 right-2 hover:scale-110 transition"
          >
            <RiShoppingCartLine className="text-white w-5 h-5" />
          </button>
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-24 rounded-t-lg"
          />
          {!tersedia && (
            <span className="bg-[#3E3F29] text-white absolute left-0 bottom-0 text-sm py-0.5 px-2 rounded-tr-2xl">
              Tidak Tersedia
            </span>
          )}
        </figure>

        <div className={`card-body p-3 h-32 w-36 shadow-md ${className}`}>
          <h2 className="card-title h-25 text-base text-stone-900 font-semibold line-clamp-2">
            {title}
          </h2>
          <div className="card-actions flex flex-col h-full items-end justify-end">
            <div className="flex flex-row gap-2">
              {isSignature && (
                <div className="badge badge-costum badge-outline text-[#747934] border-[#767946]">
                  <RiQuillPenFill className="w-3 h-3" />
                </div>
              )}
              {isBest && (
                <div className="badge badge-costum badge-outline text-[#c99b5f] border-[#cfb28c]">
                  <RiStarFill className="w-3 h-3" />
                </div>
              )}
            </div>
            <div className="badge badge-outline text-stone-900">
              Rp {Number(price).toLocaleString("id-ID")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
