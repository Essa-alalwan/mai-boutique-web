"use client";

import { useLanguage } from "@/context/LanguageContext";
import { getMapUrl } from "@/lib/locations";

export default function LocationCard({ location, highlighted = false }) {
  const { lang, t } = useLanguage();

  return (
    <article className={`location-card${highlighted ? " is-flagship" : ""}`}>
      {location.isFlagship && (
        <p className="location-card-flagship">{t("common.flagship")}</p>
      )}
      <h3>{location.name[lang]}</h3>
      <p className="location-card-address">{location.addressLine[lang]}</p>
      <dl className="location-card-meta">
        <div>
          <dt>{t("locations.hoursLabel")}</dt>
          <dd>{location.hours[lang]}</dd>
        </div>
        <div>
          <dt>{t("locations.phoneLabel")}</dt>
          <dd dir="ltr">{location.phone}</dd>
        </div>
      </dl>
      <a
        href={getMapUrl(location)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn link-underline"
      >
        {t("common.getDirections")}
      </a>
    </article>
  );
}
