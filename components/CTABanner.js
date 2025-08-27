import { getTranslations } from "next-intl/server";
import CTAButton from "./CTAButton";

export default async function CTABanner() {
  const t = await getTranslations({ namespace: "Home" });

  return (
    <div className="border border-4 border-primary/30 flex items-center justify-center gap-6 flex-col bg-base-200 px-10 py-16 section rounded-xl relative text-center rounded-xl overflow-hidden my-36">
      <span className="text-white text-5xl font-medium max-w-2xl leading-[110%] ">
        {t("CTABannerTitle")}
      </span>
      <p className="text-base-content/80 max-w-lg mb-2">
        {t("CTABannerSubtitle")}
      </p>

      <CTAButton />
      <img
        src="/cta/bg.png"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-10"
      />
    </div>
  );
}
