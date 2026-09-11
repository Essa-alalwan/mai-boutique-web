"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { getAllLocations } from "@/lib/locations";

export default function Footer() {
  const { t, lang } = useLanguage();
  const locations = getAllLocations().slice(0, 5);

  return (
    <footer className="site-footer">
      <div className="container site-footer-inner">
        <div className="footer-col footer-brand">
          <span className="footer-brand-name">M.A.I</span>
          <p className="lede">{t("footer.tagline")}</p>
          <p className="footer-demo-note">{t("footer.demoNote")}</p>
        </div>

        <div className="footer-col">
          <h3 className="footer-col-title">{t("footer.navTitle")}</h3>
          <ul>
            <li><Link href="/shop" className="link-underline">{t("nav.shop")}</Link></li>
            <li><Link href="/about" className="link-underline">{t("nav.about")}</Link></li>
            <li><Link href="/contact" className="link-underline">{t("nav.contact")}</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-col-title">{t("footer.branchesTitle")}</h3>
          <ul>
            {locations.map((loc) => (
              <li key={loc.id}>
                <Link href="/locations" className="link-underline">
                  {loc.name[lang]}
                </Link>
              </li>
            ))}
            <li><Link href="/locations" className="link-underline">{t("common.viewAll")}</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-col-title">{t("footer.followTitle")}</h3>
          <a
            href="https://instagram.com/m.a.i_bh"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline"
          >
            @m.a.i_bh
          </a>
          <p className="lede">{t("home.statFollowers")} {t("home.statFollowersLabel")}</p>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} {t("footer.rights")}</p>
      </div>
    </footer>
  );
}
