"use client";

import { useLanguage } from "@/context/LanguageContext";
import SplitSection from "@/components/SplitSection";
import RingFrame from "@/components/RingFrame";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="container section">
      <h1>{t("about.title")}</h1>
      <p className="lede" style={{ marginBlockStart: "10px" }}>{t("about.intro")}</p>

      <div className="section-tight">
        <SplitSection
          photo="1552904219-f4b87efe8792"
          title={t("about.heritageTitle")}
          body={t("about.heritageBody")}
        />
      </div>

      <RingFrame variant="divider" />

      <div className="section-tight">
        <SplitSection
          photo="1740711152088-88a009e877bb"
          title={t("about.craftTitle")}
          body={t("about.craftBody")}
          reverse
        />
      </div>

      <RingFrame variant="divider" />

      <div className="section-tight">
        <SplitSection
          photo="1601561446301-fecc99036f4b"
          title={t("about.presenceTitle")}
          body={t("about.presenceBody")}
        />
      </div>

      <p className="pull-quote">{t("about.quote")}</p>
    </div>
  );
}
