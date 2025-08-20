"use client";

import { useLocale } from "next-intl";

export default function SelectLanguage() {
  const locale = useLocale();

  return (
    <select
      className="select select-sm select-ghost w-20 text-xs h-full"
      value={locale}
      onChange={(e) => {
        const newLocale = e.target.value;
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
