import { getTranslations } from "next-intl/server";
import { getLocale } from "next-intl/server";

export default async function CTAButton() {
  const t = await getTranslations({ namespace: "Home" });
  const locale = await getLocale();

  return (
    <a
      href={`/${locale}#contact`}
      className="btn btn-primary px-6 group relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 z-10"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 animate-pulse rounded-lg"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
      <span className="relative z-10 text-[1rem]">{t("heroButton")}</span>
      <div className="relative inline-flex items-center ml-2 w-5 h-3 overflow-hidden z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="12"
          viewBox="0 0 20 12"
          fill="none"
          className="absolute transition-transform duration-300 ease-in-out left-0 group-hover:translate-x-6"
        >
          <path
            d="M13.3333 0.166687C13.3333 0.78502 13.9442 1.70835 14.5625 2.48335C15.3575 3.48335 16.3075 4.35585 17.3967 5.02169C18.2133 5.52085 19.2033 6.00002 20 6.00002M20 6.00002C19.2033 6.00002 18.2125 6.47919 17.3967 6.97835C16.3075 7.64502 15.3575 8.51752 14.5625 9.51585C13.9442 10.2917 13.3333 11.2167 13.3333 11.8334M20 6.00002H0"
            stroke="currentColor"
            strokeWidth="2"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="12"
          viewBox="0 0 20 12"
          fill="none"
          className="absolute transition-transform duration-300 ease-in-out -translate-x-full group-hover:translate-x-0"
        >
          <path
            d="M13.3333 0.166687C13.3333 0.78502 13.9442 1.70835 14.5625 2.48335C15.3575 3.48335 16.3075 4.35585 17.3967 5.02169C18.2133 5.52085 19.2033 6.00002 20 6.00002M20 6.00002C19.2033 6.00002 18.2125 6.47919 17.3967 6.97835C16.3075 7.64502 15.3575 8.51752 14.5625 9.51585C13.9442 10.2917 13.3333 11.2167 13.3333 11.8334M20 6.00002H0"
            stroke="currentColor"
            strokeWidth="2"
          ></path>
        </svg>
      </div>
    </a>
  );
}
