"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="container section" style={{ textAlign: "center" }}>
      <h1>{t("notFound.title")}</h1>
      <p className="lede" style={{ marginInline: "auto", marginBlockStart: "12px" }}>
        {t("notFound.body")}
      </p>
      <Link href="/" className="btn btn-solid" style={{ marginBlockStart: "28px" }}>
        {t("notFound.cta")}
      </Link>
    </div>
  );
}
