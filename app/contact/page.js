"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="container section">
      <h1>{t("contact.title")}</h1>
      <p className="lede" style={{ marginBlockStart: "10px", marginBlockEnd: "36px" }}>
        {t("contact.intro")}
      </p>

      <div className="contact-layout">
        <div>
          {sent ? (
            <div className="demo-banner" role="status">
              <p className="demo-banner-title">{t("contact.sentTitle")}</p>
              <p className="demo-banner-body">{t("contact.sentBody")}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-field">
                <label htmlFor="contact-name">{t("contact.nameLabel")}</label>
                <input id="contact-name" name="name" type="text" required />
              </div>
              <div className="form-field">
                <label htmlFor="contact-email">{t("contact.emailLabel")}</label>
                <input id="contact-email" name="email" type="email" required />
              </div>
              <div className="form-field">
                <label htmlFor="contact-message">{t("contact.messageLabel")}</label>
                <textarea id="contact-message" name="message" rows={5} required />
              </div>
              <button type="submit" className="btn btn-solid">
                {t("contact.send")}
              </button>
            </form>
          )}
        </div>

        <div className="contact-social">
          <h2>{t("contact.followTitle")}</h2>
          <p className="lede">{t("contact.followBody")}</p>
          <a
            href="https://instagram.com/m.a.i_bh"
            target="_blank"
            rel="noopener noreferrer"
            className="btn link-underline"
          >
            @m.a.i_bh
          </a>
        </div>
      </div>
    </div>
  );
}
