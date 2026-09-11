"use client";

import { Suspense, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import ProductCard from "@/components/ProductCard";
import { getAllProducts, getSubcategories } from "@/lib/products";

const SUBCATEGORY_LABELS = {
  joggers: { en: "Joggers", ar: "بناطيل جوجر" },
  shorts: { en: "Shorts", ar: "شورتات" },
  tshirts: { en: "T-Shirts", ar: "تيشيرتات" },
  shirts: { en: "Shirts", ar: "قمصان" },
  chinos: { en: "Chinos", ar: "تشينو" },
  oud: { en: "Oud", ar: "عود" },
  woody: { en: "Woody", ar: "خشبي" },
  oriental: { en: "Oriental", ar: "شرقي" },
};

const PRICE_BANDS = [
  { id: "any", max: Infinity },
  { id: "under5", max: 5 },
  { id: "5to15", min: 5, max: 15 },
  { id: "over15", min: 15, max: Infinity },
];

function ShopContent() {
  const { t, lang } = useLanguage();
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "all";

  const [subcategory, setSubcategory] = useState("all");
  const [priceBand, setPriceBand] = useState("any");
  const [search, setSearch] = useState("");

  const setCategory = (next) => {
    setSubcategory("all");
    router.push(next === "all" ? "/shop" : `/shop?category=${next}`);
  };

  const products = useMemo(() => {
    let list = getAllProducts();
    if (category !== "all") list = list.filter((p) => p.category === category);
    if (subcategory !== "all") list = list.filter((p) => p.subcategory === subcategory);
    if (priceBand !== "any") {
      const band = PRICE_BANDS.find((b) => b.id === priceBand);
      list = list.filter((p) => p.price < band.max && p.price >= (band.min || 0));
    }
    const query = search.trim();
    if (query) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) => p.name.en.toLowerCase().includes(q) || p.name.ar.includes(query)
      );
    }
    return list;
  }, [category, subcategory, priceBand, search]);

  const subcategories = category === "all" ? [] : getSubcategories(category);

  return (
    <div className="container section">
      <h1>{t("shop.title")}</h1>
      <p className="lede" style={{ marginBlockStart: "10px" }}>{t("shop.intro")}</p>

      <div className="search-field">
        <label htmlFor="shop-search" className="visually-hidden">
          {t("shop.searchLabel")}
        </label>
        <input
          id="shop-search"
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={t("shop.searchPlaceholder")}
        />
      </div>

      <div className="shop-filters">
        <div className="filter-group" role="group" aria-label={t("shop.title")}>
          {[
            { id: "all", label: t("shop.filterAll") },
            { id: "clothing", label: t("shop.filterClothing") },
            { id: "perfume", label: t("shop.filterPerfume") },
          ].map((opt) => (
            <button
              key={opt.id}
              type="button"
              className={`filter-chip${category === opt.id ? " is-active" : ""}`}
              onClick={() => setCategory(opt.id)}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {subcategories.length > 0 && (
          <div className="filter-group">
            <button
              type="button"
              className={`filter-chip${subcategory === "all" ? " is-active" : ""}`}
              onClick={() => setSubcategory("all")}
            >
              {t("shop.subAll")}
            </button>
            {subcategories.map((sub) => (
              <button
                key={sub}
                type="button"
                className={`filter-chip${subcategory === sub ? " is-active" : ""}`}
                onClick={() => setSubcategory(sub)}
              >
                {SUBCATEGORY_LABELS[sub]?.[lang] || sub}
              </button>
            ))}
          </div>
        )}

        <select
          className="filter-select"
          value={priceBand}
          onChange={(e) => setPriceBand(e.target.value)}
          aria-label={t("shop.priceLabel")}
        >
          <option value="any">{t("shop.priceAny")}</option>
          <option value="under5">{t("common.currency")} &lt; 5</option>
          <option value="5to15">{t("common.currency")} 5–15</option>
          <option value="over15">{t("common.currency")} 15+</option>
        </select>
      </div>

      {products.length > 0 ? (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p>{t("shop.emptyState")}</p>
          <button
            type="button"
            className="btn"
            onClick={() => {
              setSubcategory("all");
              setPriceBand("any");
              setSearch("");
              setCategory("all");
            }}
          >
            {t("shop.resetFilters")}
          </button>
        </div>
      )}
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={null}>
      <ShopContent />
    </Suspense>
  );
}
