import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function Footer() {
  const articles = await fetch(
    `https://beatrice.app/api/articles?token=203377ab-1537-4b08-a5ec-93d090abc95e&limit=3`
  );
  const { data } = await articles.json();

  const t = await getTranslations("Footer");

  return (
    <div className="bg-base-200 text-base-content p-10 w-full ">
      <footer className="footer m-auto max-w-screen-xl">
        <aside>
          <a href="#">
            <img
              src="/logo.svg"
              className="w-12 h-12"
              width={160}
              height={160}
              quality={100}
              alt="Logo Brice Eliasse"
            />
          </a>
          <p>
            <span className="text-xl font-semibold tracking-normal">
              Brice Eliasse
            </span>
            <br />
            Copyright © {new Date().getUTCFullYear()}{" "}
            <span className="hidden sm:inline">- {t("allRightsReserved")}</span>
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">{t("latestPosts")}</h6>
          {data.map((article, i) => (
            <Link
              key={i}
              href={`/articles/${article.slug}`}
              className="link link-hover line-clamp-1 max-w-xl"
            >
              {article.title}
            </Link>
          ))}
        </nav>
        <nav>
          <h6 className="footer-title">{t("contact")}</h6>
          <span>{t("address")}</span>
          <span>
            SIRET :{" "}
            <a
              href="https://www.societe.com/societe/monsieur-brice-eliasse-923386692.html"
              target="_blank"
              rel="noopener noreferrer"
              className="link link-hover "
            >
              {" "}
              923 386 692 00019
            </a>
          </span>
        </nav>
      </footer>
    </div>
  );
}
