"use client";

import { useLanguage } from "@/context/LanguageContext";
import LocationCard from "@/components/LocationCard";
import { getAllLocations } from "@/lib/locations";

export default function LocationsPage() {
  const { t } = useLanguage();
  const locations = getAllLocations();
  const [flagship, ...rest] = locations;

  return (
    <div className="container section">
      <h1>{t("locations.title")}</h1>
      <p className="lede" style={{ marginBlockStart: "10px", marginBlockEnd: "36px" }}>
        {t("locations.intro")}
      </p>

      <div className="locations-grid">
        <LocationCard location={flagship} highlighted />
        {rest.map((loc) => (
          <LocationCard key={loc.id} location={loc} />
        ))}
      </div>
    </div>
  );
}
