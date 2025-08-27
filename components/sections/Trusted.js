import { useTranslations } from "next-intl";

export default function Trusted() {
  const t = useTranslations("Home");

  return (
    <div className="section">
      <span className="text-xl font-medium flex gap-2 items-center justify-center mt-20 md:-mt-14">
        {t("trustHeading")}
      </span>
      <div className="mt-12 grid grid-cols-12 gap-6 max-w-screen-lg m-auto place-items-center">
        <div className="col-span-6 md:col-span-3 max-h-14 max-w-48">
          <img
            className="invert brightness-0  h-full object-contain m-auto "
            src="/trusted/mediaschool.png"
            alt="Logo Mediaschool"
            loading="lazy"
            width={192}
            height={58}
          />
        </div>
        <div className="col-span-6 md:col-span-3 max-h-14 max-w-48">
          <img
            className="invert brightness-0 h-full object-contain m-auto"
            src="/trusted/capsule.png"
            alt="Logo La Capsule"
            loading="lazy"
            width={192}
            height={58}
          />
        </div>
        <div className="col-span-6 md:col-span-3 max-h-14 max-w-48">
          <img
            className="invert brightness-0 h-full object-contain m-auto"
            src="/trusted/g2.png"
            alt="Logo G2 Esposrts"
            loading="lazy"
            width={192}
            height={58}
          />
        </div>
        <div className="col-span-6 md:col-span-3 max-h-14 max-w-48">
          <img
            className="invert brightness-0 h-full object-contain m-auto"
            src="/trusted/supdeweb.png"
            alt="Logo Supdeweb"
            loading="lazy"
            width={192}
            height={58}
          />
        </div>
      </div>
    </div>
  );
}
