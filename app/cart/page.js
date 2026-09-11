"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import PlaceholderImage from "@/components/PlaceholderImage";

export default function CartPage() {
  const { lang, t } = useLanguage();
  const { items, updateQty, removeItem, subtotal } = useCart();
  const [showDemoNotice, setShowDemoNotice] = useState(false);

  if (items.length === 0) {
    return (
      <div className="container section empty-state">
        <h1>{t("cart.empty")}</h1>
        <p className="lede" style={{ marginInline: "auto", marginBlockStart: "10px" }}>
          {t("cart.emptyBody")}
        </p>
        <Link href="/shop" className="btn btn-solid">
          {t("common.continueShopping")}
        </Link>
      </div>
    );
  }

  return (
    <div className="container section">
      <h1>{t("cart.title")}</h1>

      <div className="cart-lines" style={{ marginBlockStart: "32px" }}>
        {items.map((line) => (
          <div key={line.lineId} className="cart-line">
            <span className="cart-line-thumb">
              <PlaceholderImage
                photo={line.image.photo}
                width={line.image.width}
                height={line.image.height}
                alt={line.name[lang]}
              />
            </span>
            <div className="cart-line-info">
              <p className="cart-line-name">{line.name[lang]}</p>
              <p className="cart-line-variant">{line.variantLabel[lang]}</p>
              <div className="cart-line-actions" style={{ marginBlockStart: "10px" }}>
                <div className="qty-stepper">
                  <button
                    type="button"
                    onClick={() => updateQty(line.lineId, line.qty - 1)}
                    aria-label="-"
                  >
                    −
                  </button>
                  <span>{line.qty}</span>
                  <button
                    type="button"
                    onClick={() => updateQty(line.lineId, line.qty + 1)}
                    aria-label="+"
                  >
                    +
                  </button>
                </div>
                <button
                  type="button"
                  className="link-underline"
                  onClick={() => removeItem(line.lineId)}
                >
                  {t("common.remove")}
                </button>
              </div>
            </div>
            <p className="cart-line-price">
              {(line.unitPrice * line.qty).toFixed(2)} {t("common.currency")}
            </p>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <div className="cart-summary-row">
          <span>{t("common.subtotal")}</span>
          <span>
            {subtotal.toFixed(2)} {t("common.currency")}
          </span>
        </div>
        <p className="cart-summary-note">{t("cart.subtotalNote")}</p>
        <button
          type="button"
          className="btn btn-solid"
          style={{ width: "100%", justifyContent: "center" }}
          onClick={() => setShowDemoNotice(true)}
        >
          {t("cart.checkout")}
        </button>

        {showDemoNotice && (
          <div className="demo-banner" role="status">
            <p className="demo-banner-title">{t("cart.checkoutDemoTitle")}</p>
            <p className="demo-banner-body">{t("cart.checkoutDemoBody")}</p>
          </div>
        )}
      </div>
    </div>
  );
}
