"use client";

import { useLanguage } from "@/context/LanguageContext";
import RingFrame from "@/components/RingFrame";
import PlaceholderImage from "@/components/PlaceholderImage";

export default function SplitSection({
  photo,
  title,
  body,
  reverse = false,
  children,
}) {
  const { lang } = useLanguage();

  return (
    <div className={`split-section${reverse ? " is-reverse" : ""}`}>
      <RingFrame variant="corners" ratio="4 / 3" className="split-section-media">
        <PlaceholderImage photo={photo} width={900} height={700} alt="" />
      </RingFrame>
      <div className="split-section-copy">
        <h2>{title}</h2>
        <p className="lede">{body}</p>
        {children}
      </div>
    </div>
  );
}
