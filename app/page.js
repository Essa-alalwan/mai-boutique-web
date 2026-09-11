"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import RingFrame from "@/components/RingFrame";
import PlaceholderImage from "@/components/PlaceholderImage";
import ProductCard from "@/components/ProductCard";
import SplitSection from "@/components/SplitSection";
import LocationCard from "@/components/LocationCard";
import { getFeaturedProducts } from "@/lib/products";
import { getAllLocations } from "@/lib/locations";

export default function HomePage() {
  const { t, lang } = useLanguage();
  const featured = getFeaturedProducts(6);
  const previewLocations = getAllLocations().slice(0, 3);

  return (
    <>
      <section className="container hero">
        <div className="hero-copy">
          <h1>{t("home.heroTitle")}</h1>
          <p className="lede">{t("home.heroBody")}</p>
          <hr className="hairline" style={{ maxWidth: "120px" }} />
          <div className="hero-actions">
            <Link href="/shop" className="btn btn-solid">
              {t("home.heroCta")}
            </Link>
            <Link href="/locations" className="btn-ghost link-underline">
              {t("home.heroSecondaryCta")}
            </Link>
          </div>
        </div>
        <div className="hero-media">
          <RingFrame variant="full" ratio="1 / 1" animate>
            <PlaceholderImage
              photo="1740711152088-88a009e877bb"
              width={800}
              height={800}
              alt=""
            />
          </RingFrame>
        </div>
      </section>

      <section className="container stat-strip">
        <div className="stat-item">
          <span className="stat-number">{t("home.statFollowers")}</span>
          <p className="stat-label">{t("home.statFollowersLabel")}</p>
        </div>
        <div className="stat-item">
          <span className="stat-number">{t("home.statBranches")}</span>
          <p className="stat-label">{t("home.statBranchesLabel")}</p>
        </div>
      </section>

      <section className="container section">
        <div className="tile-grid">
          <Link href="/shop?category=clothing" className="tile">
            <span className="tile-media">
              <PlaceholderImage photo="1621496503717-095a410e1566" width={700} height={500} alt="" />
            </span>
            <div className="tile-body">
              <h3>{t("home.tileClothingTitle")}</h3>
              <p>{t("home.tileClothingBody")}</p>
            </div>
          </Link>
          <Link href="/shop?category=perfume" className="tile">
            <span className="tile-media">
              <PlaceholderImage photo="1650686036849-ff87bcaa2e9e" width={700} height={500} alt="" />
            </span>
            <div className="tile-body">
              <h3>{t("home.tilePerfumeTitle")}</h3>
              <p>{t("home.tilePerfumeBody")}</p>
            </div>
          </Link>
        </div>
      </section>

      <section className="container section">
        <h2>{t("home.featuredTitle")}</h2>
        <p className="lede" style={{ marginBlockStart: "10px", marginBlockEnd: "36px" }}>
          {t("home.featuredBody")}
        </p>
        <div className="product-grid is-featured">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <RingFrame variant="divider" className="container" />

      <section className="container section-tight">
        <SplitSection
          photo="1678274342617-09c13eefab9f"
          title={t("home.storyTitle")}
          body={t("home.storyBody")}
        >
          <Link href="/about" className="btn" style={{ marginBlockStart: "8px" }}>
            {t("home.storyCta")}
          </Link>
        </SplitSection>
      </section>

      <section className="container section-tight">
        <h2>{t("home.locationsTitle")}</h2>
        <p className="lede" style={{ marginBlockStart: "10px", marginBlockEnd: "32px" }}>
          {t("home.locationsBody")}
        </p>
        <div className="locations-grid">
          {previewLocations.map((loc) => (
            <LocationCard key={loc.id} location={loc} highlighted={loc.isFlagship} />
          ))}
        </div>
        <Link href="/locations" className="btn" style={{ marginBlockStart: "32px" }}>
          {t("home.locationsCta")}
        </Link>
      </section>
    </>
  );
}
