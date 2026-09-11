"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import RingFrame from "@/components/RingFrame";
import PlaceholderImage from "@/components/PlaceholderImage";

export default function ProductCard({ product, className = "" }) {
  const { lang, t } = useLanguage();

  return (
    <Link href={`/product/${product.slug}`} className={`product-card ${className}`}>
      <RingFrame variant="corners" ratio="4 / 5" className="product-card-media">
        <PlaceholderImage
          photo={product.image.photo}
          width={product.image.width}
          height={product.image.height}
          alt={product.name[lang]}
        />
      </RingFrame>
      <div className="product-card-body">
        <h3 className="product-card-name">{product.name[lang]}</h3>
        <p className="product-card-price">
          {t("common.from")} {product.price} {t("common.currency")}
        </p>
      </div>
    </Link>
  );
}
