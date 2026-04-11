"use client";

import { useLocale } from "next-intl";
import { getGeoSlugAlternatesMap } from "@/data/geoDeveloperPageRegistry";

const GEO_SLUG_ALTERNATES = getGeoSlugAlternatesMap();

export default function SelectLanguage() {
  const locale = useLocale();

  return (
    <select
      className="select select-sm select-ghost w-20 text-xs h-full whitespace-nowrap"
      value={locale}
      onChange={(e) => {
        const newLocale = e.target.value;
        const pathname = window.location.pathname;
        const m = pathname.match(/^\/(fr|en)\/([^/]+)\/?$/);
        if (m) {
          const slug = m[2];
          const row = GEO_SLUG_ALTERNATES[slug];
          if (row) {
            const nextSlug = row[newLocale];
            if (nextSlug) {
              window.location.href = `/${newLocale}/${nextSlug}/`;
              return;
            }
          }
        }
        window.location.href = `/${newLocale}${window.location.pathname.replace(
          /^\/(fr|en)/,
          ""
        )}`;
      }}
      aria-label="Changer la langue"
    >
      <option value="fr">🇫🇷 FR</option>
      <option value="en">🇺🇸 EN</option>
    </select>
  );
}
