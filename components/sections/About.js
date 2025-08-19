import Age from "../Age";
import MusicBtn from "../ui/MusicBtn";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import AnimatedAvatar from "../ui/AnimatedAvatar";

export default function About() {
  const t = useTranslations("Home");
  const locale = useLocale();
  return (
    <div className="section grid grid-cols-12 items-center " id="about">
      <div className="col-span-12 md:order-1 md:col-span-6 flex flex-col items-center">
        <AnimatedAvatar />
        <span className=" h-[4px] rounded-full bg-primary w-3/4 border-primary z-10 "></span>
      </div>
      <div className="col-span-12  md:col-span-6 flex flex-col gap-6">
        <h2>
          {t("aboutHeading1")} <br />
          <span className="text-primary">{t("aboutHeading2")}</span>
        </h2>
        <p>
          {t("aboutAge")} <Age />{" "}
          {t.rich("aboutAge2", {
            underline: (chunks) => <span className="underline">{chunks}</span>,
          })}
          {locale === "fr" && <MusicBtn />}{" "}
        </p>
        <p>
          {t.rich("aboutParagraph1", {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </p>
        <p>{t("aboutQuote")}</p>
        <div className="flex gap-3 items-center">
          <a
            href="https://www.linkedin.com/in/brice-eliasse"
            target="_blank"
            className="btn btn-neutral btn-sm px-5"
          >
            {t("addLinkedin")}{" "}
            <svg
              className="w-4 h-4"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
            </svg>
          </a>
          <a
            href="/CV_Brice-Eliasse_Developpeur.pdf"
            target="_blank"
            className="btn btn-outline btn-sm px-5"
          >
            {t("downloadCV")}
          </a>
        </div>
      </div>
    </div>
  );
}
