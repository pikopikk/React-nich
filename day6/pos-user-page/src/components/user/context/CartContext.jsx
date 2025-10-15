// src/components/user/context/CartContext.jsx
import { createContext, useContext, useState, useMemo } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item, options = { qty: 1 }) => {
    // normalisasi fields -> pastikan ada id, name, price, image (jika ada)
    const normalized = {
      id: item.id,
      name: item.name ?? item.title ?? "Unknown",
      price: item.price ?? 0,
      image: item.image ?? item.img ?? item.imageUrl ?? null,
      // jika ada properti lain di item, kamu bisa spread di sini jika mau:
      // ...item,
    };

    const qtyToAdd = options.qty ?? 1;

    setCart((prev) => {
      const existing = prev.find((i) => i.id === normalized.id);
      if (existing) {
        // update qty pada item yang sudah ada
        return prev.map((i) =>
          i.id === normalized.id ? { ...i, qty: i.qty + qtyToAdd } : i
        );
      } else {
        // tambah item baru dengan qty
        return [...prev, { ...normalized, qty: qtyToAdd }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const updateQty = (id, qty) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, qty) } : item
      )
    );
  };

  const totalPrice = useMemo(
    () => cart.reduce((sum, item) => sum + (item.price ?? 0) * (item.qty ?? 0), 0),
    [cart]
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);
export default CartContext;
