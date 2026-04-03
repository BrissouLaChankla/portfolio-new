import { useTranslations } from "next-intl";

export default function Trusted() {
  const t = useTranslations("Home");

  return (
    <div className="section">
      <span className="text-xl font-medium flex gap-2 items-center justify-center mt-20 md:-mt-14">
        {t("trustHeading")}
      </span>
      <div className="mt-12 flex max-w-screen-lg flex-wrap justify-center gap-6 mx-auto px-4">
        <div className="flex h-14 max-h-14 w-[calc(50%-12px)] max-w-48 shrink-0 items-center justify-center md:w-[calc(25%-18px)]">
          <img
            className="invert brightness-0  h-full object-contain m-auto "
            src="/trusted/mediaschool.png"
            alt="Logo Mediaschool"
            loading="lazy"
            width={192}
            height={58}
          />
        </div>
        <div className="flex h-14 max-h-14 w-[calc(50%-12px)] max-w-48 shrink-0 items-center justify-center md:w-[calc(25%-18px)]">
          <img
            className="invert brightness-0 h-full object-contain m-auto"
            src="/trusted/capsule.png"
            alt="Logo La Capsule"
            loading="lazy"
            width={192}
            height={58}
          />
        </div>
        <div className="flex h-14 max-h-14 w-[calc(50%-12px)] max-w-48 shrink-0 items-center justify-center md:w-[calc(25%-18px)]">
          <img
            className="invert brightness-0 h-full object-contain m-auto"
            src="/trusted/g2.png"
            alt="Logo G2 Esposrts"
            loading="lazy"
            width={192}
            height={58}
          />
        </div>
        <div className="flex h-14 max-h-14 w-[calc(50%-12px)] max-w-48 shrink-0 items-center justify-center md:w-[calc(25%-18px)]">
          <img
            className="invert brightness-0 h-full object-contain m-auto"
            src="/trusted/supdeweb.png"
            alt="Logo Supdeweb"
            loading="lazy"
            width={192}
            height={58}
          />
        </div>
        <div className="flex h-14 max-h-14 w-[calc(50%-12px)] max-w-48 shrink-0 items-center justify-center md:w-[calc(25%-18px)]">
          <img
            className="invert brightness-0 h-full object-contain m-auto"
            src="/trusted/optionzero.png"
            alt="Logo Option Zero"
            loading="lazy"
            width={192}
            height={58}
          />
        </div>
        <div className="flex h-14 max-h-14 w-[calc(50%-12px)] max-w-48 shrink-0 items-center justify-center md:w-[calc(25%-18px)]">
          <img
            className="h-full object-contain m-auto"
            src="/trusted/valueofwe.png"
            alt="Logo Value of We"
            loading="lazy"
            width={192}
            height={58}
          />
        </div>
        <div className="flex h-14 max-h-14 w-[calc(50%-12px)] max-w-48 shrink-0 items-center justify-center md:w-[calc(25%-18px)]">
          <img
            className="invert brightness-0 h-full object-contain m-auto"
            src="/trusted/selego.png"
            alt="Logo Selego"
            loading="lazy"
            width={192}
            height={58}
          />
        </div>
    
      </div>
    </div>
  );
}
