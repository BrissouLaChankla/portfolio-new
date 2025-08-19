export function lp(locale, path = "") {
  // Ajoute /en uniquement si locale === "en"
  const prefix = locale === "en" ? "/en" : "";
  // path doit commencer par "/"
  return `${prefix}${path}`;
}
