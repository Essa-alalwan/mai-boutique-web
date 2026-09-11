"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import RingFrame from "@/components/RingFrame";

const NAV_ITEMS = [
  { href: "/", key: "home" },
  { href: "/shop", key: "shop" },
  { href: "/locations", key: "locations" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
];

export default function Header() {
  const { t, toggleLang } = useLanguage();
  const { count } = useCart();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <Link href="/" className="brand-mark" aria-label="M.A.I Clothing & Perfumes">
          <RingFrame variant="full" ratio="1 / 1" className="brand-ring">
            <Image
              src="/images/logo.jpg"
              alt=""
              fill
              sizes="46px"
              style={{ objectFit: "cover", borderRadius: "50%" }}
            />
          </RingFrame>
        </Link>

        <nav className="site-nav" aria-label="Primary">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`link-underline${pathname === item.href ? " is-active" : ""}`}
                >
                  {t(`nav.${item.key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header-actions">
          <button type="button" className="lang-toggle" onClick={toggleLang}>
            {t("common.language")}
          </button>
          <Link href="/cart" className="cart-link" aria-label={t("nav.cart")}>
            <span aria-hidden="true">{t("nav.cart")}</span>
            {count > 0 && <span className="cart-badge">{count}</span>}
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="visually-hidden">{t("common.menu")}</span>
            <span className={`menu-icon${menuOpen ? " is-open" : ""}`} aria-hidden="true" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setMenuOpen(false)}>
                  {t(`nav.${item.key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
