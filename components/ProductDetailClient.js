"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import RingFrame from "@/components/RingFrame";
import PlaceholderImage from "@/components/PlaceholderImage";
import ProductCard from "@/components/ProductCard";

export default function ProductDetailClient({ product, related }) {
  const { lang, t } = useLanguage();
  const { addItem } = useCart();
  const [variant, setVariant] = useState(product.variants[0]);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const isVolume = product.category === "perfume";

  const handleAdd = () => {
    addItem(product, variant, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <>
      <div className="container section product-detail">
        <div className="product-detail-media">
          <RingFrame variant="corners" ratio="4 / 5">
            <PlaceholderImage
              photo={product.image.photo}
              width={product.image.width}
              height={product.image.height}
              alt={product.name[lang]}
            />
          </RingFrame>
        </div>

        <div className="product-detail-info">
          <h1>{product.name[lang]}</h1>
          <p className="product-detail-price">
            {variant.price} {t("common.currency")}
          </p>

          <div className="variant-group">
            <span className="variant-group-label">
              {isVolume ? t("product.volumeLabel") : t("product.sizeLabel")}
            </span>
            <div className="variant-options">
              {product.variants.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  className={`variant-btn${variant.id === v.id ? " is-selected" : ""}`}
                  onClick={() => setVariant(v)}
                  aria-pressed={variant.id === v.id}
                >
                  {v.label[lang]}
                </button>
              ))}
            </div>
          </div>

          <div className="variant-group">
            <span className="variant-group-label">{t("common.quantity")}</span>
            <div className="qty-stepper">
              <button
                type="button"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                aria-label="-"
              >
                −
              </button>
              <span>{qty}</span>
              <button type="button" onClick={() => setQty((q) => q + 1)} aria-label="+">
                +
              </button>
            </div>
          </div>

          <div className="product-actions">
            <button type="button" className="btn btn-solid" onClick={handleAdd}>
              {t("common.addToCart")}
            </button>
            {added && (
              <span className="add-confirmation" role="status">
                {t("common.addedToCart")} {product.name[lang]} {t("product.addConfirmation")}
              </span>
            )}
          </div>

          <h2 className="visually-hidden">{t("product.descriptionTitle")}</h2>
          <p className="product-description">{product.description[lang]}</p>
        </div>
      </div>

      {related.length > 0 && (
        <div className="container section-tight">
          <h2>{t("product.relatedTitle")}</h2>
          <div className="product-grid" style={{ marginBlockStart: "28px" }}>
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
