"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // One-time sync from an external system (localStorage) on mount. This must
    // stay an effect rather than a lazy useState initializer: the initializer
    // would also run during SSR/hydration and read state unavailable on the
    // server, causing a hydration mismatch against the server-rendered markup.
    try {
      const stored = window.localStorage.getItem("mai-cart");
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (stored) setItems(JSON.parse(stored));
    } catch {
      // corrupt or unavailable storage — start from an empty cart
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem("mai-cart", JSON.stringify(items));
    } catch {
      // ignore write failures (private browsing, quota, etc.)
    }
  }, [items, hydrated]);

  const value = useMemo(() => {
    const addItem = (product, variant, qty = 1) => {
      const lineId = `${product.slug}::${variant.id}`;
      setItems((prev) => {
        const existing = prev.find((line) => line.lineId === lineId);
        if (existing) {
          return prev.map((line) =>
            line.lineId === lineId ? { ...line, qty: line.qty + qty } : line
          );
        }
        return [
          ...prev,
          {
            lineId,
            slug: product.slug,
            name: product.name,
            image: product.image,
            variantId: variant.id,
            variantLabel: variant.label,
            unitPrice: variant.price,
            currency: product.currency,
            qty,
          },
        ];
      });
    };

    const updateQty = (lineId, qty) => {
      setItems((prev) =>
        qty <= 0
          ? prev.filter((line) => line.lineId !== lineId)
          : prev.map((line) => (line.lineId === lineId ? { ...line, qty } : line))
      );
    };

    const removeItem = (lineId) => {
      setItems((prev) => prev.filter((line) => line.lineId !== lineId));
    };

    const clearCart = () => setItems([]);

    const subtotal = items.reduce((sum, line) => sum + line.unitPrice * line.qty, 0);
    const count = items.reduce((sum, line) => sum + line.qty, 0);

    return { items, addItem, updateQty, removeItem, clearCart, subtotal, count };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
