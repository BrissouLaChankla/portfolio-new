import AnimatedStars from "../ui/AnimatedStars";
import { useTranslations } from "next-intl";

export default function Reviews() {
  const t = useTranslations("Reviews");
  const reviews = [
    {
      picture:
        "https://lh3.googleusercontent.com/a-/ALV-UjUYpg9yC7IHTmFnVVFbBhRET2zrOclrka_WiGbYoVI3rg=s40-c-rp-mo-br100",
      name: "Theo Chastre Pradat",
      note: 5,
      message: t("avis1"),
      date: t("aMonthAgo"),
    },
    {
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocI3CBGnXmOWTQBQrGjtA6eaLdi1vpw9Gg2htHPPfQxx4g=s40-c-rp-mo-ba2-br100",
      name: "Maxime Gomez-Duret",
      note: 5,
      message: t("avis2"),
      date: t("aMonthAgo"),
    },
    {
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocLZ-KxPthVCyeKI79RVgTfjwwQr5G6t6xe8PoaTuS2_-A=s40-c-rp-mo-ba3-br100",
      name: "Johan B",
      note: 5,
      message: t("avis3"),
      date: t("aMonthAgo"),
    },
    {
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocJxzF98smBXWw4M-4U2kIZdfpQCcevFgcCu4CbJrY-w=s40-c-rp-mo-br100",
      name: "Romain Vuillaume",
      note: 5,
      message: t("avis4"),
      date: t("4WeeksAgo"),
    },
    {
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocL5eLgDGbzoo3w3CGo6SEPy6grwfNG6hO7LDqSwGnTX=s40-c-rp-mo-br100",
      name: "rémi vialle",
      note: 5,
      message: t("avis5"),
      date: t("aMonthAgo"),
    },
    {
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocJbQiXMnVvFcHnriP-T2DEaCPbHyLmHqiQ5fmC6q5dZ=s40-c-rp-mo-br100",
      name: "Asdrey Drey",
      note: 5,
      message: t("avis6"),
      date: t("3WeeksAgo"),
    },
    {
      picture:
        "https://lh3.googleusercontent.com/a-/ALV-UjULC83iIBnyeoeeCpk2YNTc_Q76fqk6r52EQ86zjB0EeXE=s40-c-rp-mo-br100",
      name: "Andrea Giuglaris",
      note: 5,
      message: t("avis7"),
      date: t("aMonthAgo"),
    },
    {
      picture:
        "https://lh3.googleusercontent.com/a-/ALV-UjUY2gGXXoVWrLOrs1kbWSZljXZSpA1IeeENxHp58LoxXw=s40-c-rp-mo-br100",
      name: "Benoit",
      note: 5,
      message: t("avis8"),
      date: t("aMonthAgo"),
    },
    {
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocJSFkmSRBbkZrWg0WbKcqhweLlLxVhvx7j9eqmKpj2O=s40-c-rp-mo-br100",
      name: "Clement Fraissinet",
      note: 5,
      message: t("avis9"),
      date: t("aMonthAgo"),
    },
    {
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocIqdF0ePTkvUTY29ypv4U1yBcqouunzSdJC27Sbvwxk=s40-c-rp-mo-br100",
      name: "Nikita Kofman",
      note: 5,
      message: t("avis10"),
      date: t("aMonthAgo"),
    },
    {
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocJt-DVH2W5X25NO_MzV2cs6qM1NnRoVM7yoaf9oQmJY=s40-c-rp-mo-br100",
      name: "Wilfried",
      note: 5,
      message: t("avis11"),
      date: t("aMonthAgo"),
    },
    {
      picture:
        "https://lh3.googleusercontent.com/a-/ALV-UjWGEcLN6YHTZIz7jmQ9KBguMifNa0D1ac4b9jHI4a5Q2rw=s40-c-rp-mo-br100",
      name: "Meghan Bégué",
      note: 5,
      message: t("avis12"),
      date: t("aMonthAgo"),
    },
    {
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocK5Tk6mgxmr1-ZOu9_0uLGCLwJ318o5OYZgWzwWq75k=s40-c-rp-mo-br100",
      name: "Cédric Beillevaire",
      note: 5,
      message: t("avis13"),
      date: t("aMonthAgo"),
    },
    {
      picture:
        "https://lh3.googleusercontent.com/a-/ALV-UjXtMXsB3SESoo71r25O2oQfDKiK7riciTIm5A2nsFoNM5I=s40-c-rp-mo-br100",
      name: "Alexandre Pastor",
      note: 5,
      message: t("avis14"),
      date: t("3WeeksAgo"),
    },
    {
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocJwh0Mwmles9J4D5t3NKMJeTxm_RLKJSGixw8LnExzO=s40-c-rp-mo-br100",
      name: "Nico Müller",
      note: 5,
      message: t("avis15"),
      date: t("5YearsAgo"),
    },
    {
      picture:
        "https://lh3.googleusercontent.com/a-/ALV-UjWEQ5EKYlYy_QFw9GOv3K2xQh4eslhNIfoLqNWEE6UxGBg=s40-c-rp-mo-br100",
      name: "Tony Giordano",
      note: 5,
      message: t("avis16"),
      date: t("aMonthAgo"),
    },
    {
      picture:
        "https://lh3.googleusercontent.com/a-/ALV-UjXLfe79Ssrhk1A6TaDB9R7ifQD1tENvv_utKpbZNJ7DbbMX=s40-c-rp-mo-ba2-br100",
      name: "Tugdual Harel",
      note: 5,
      message: t("avis17"),
      date: t("4YearsAgo"),
    },
    {
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocIjCEq1nA-nHvE7fPCzMpAIVsWew2qjT6YXK9i5OCSg=s40-c-rp-mo-br100",
      name: "Terence Rajapaksage",
      note: 5,
      message: t("avis18"),
      date: t("aMonthAgo"),
    },
    {
      picture:
        "https://lh3.googleusercontent.com/a-/ALV-UjURi3Wl6zeNx0i2GfIH4VlRP1uzITvVDfik190s226rHxk=s40-c-rp-mo-br100",
      name: "Guillaume ARMAND",
      note: 5,
      message: t("avis19"),
      date: t("4YearsAgo"),
    },
    {
      picture:
        "https://lh3.googleusercontent.com/a-/ALV-UjWMjB1IVCsuHnoXTC6ZxEoo368V-IJSID-eIteujlYvyDyM=s40-c-rp-mo-ba4-br100",
      name: "Grégory Gérard",
      note: 5,
      message: t("avis20"),
      date: t("4YearsAgo"),
    },
    {
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocJ7i2WDgMJdI9iuUDlGbSHPpTXZAiKbckbFET_ItLqc=s40-c-rp-mo-br100",
      name: "Veronique Azzopardi",
      note: 5,
      message: t("avis21"),
      date: t("2DaysAgo"),
    },
    {
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocIEdc_S0GL3gnNKCE3Jw_USzSfw-9Zqjy6iY-KKKEH_=s40-c-rp-mo-br100",
      name: "Pierre-Olivier Bruneau",
      note: 5,
      message: t("avis22"),
      date: t("1DayAgo"),
    },
    {
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocJoYKfTHJNUjX_eKte81eUYWMZs-PE42b71ODMsiZ76=s40-c-rp-mo-br100",
      name: "pierre sesmat",
      note: 5,
      message: t("avis23"),
      date: t("2DaysAgo"),
    },
    {
      picture:
        "https://lh3.googleusercontent.com/a/ACg8ocJW9gCzfXHGDrgeCD6ani1Wvr24_ne0vkqgqwJ3Eu1svg=s40-c-rp-mo-br100",
      name: "Maxime Maillot",
      note: 5,
      message: t("avis24"),
      date: t("3YearsAgo"),
    },
  ];
  return (
    <div className="section pt-20 md:pt-0">
      <AnimatedStars />
      <h2 className="text-center">
        {t("heading")}
        <div className="text-primary">{t("heading2")}</div>
      </h2>
      <div className="gap-4 columns-3xs py-14 ">
        {reviews.map((review, i) => {
          let words = review.name.split(" ");
          const firstname = words.shift();
          const lastname = words.join("")[0] || "X";
          return (
            <div
              key={i}
              className="bg-base-200 rounded-lg p-6 mb-4 break-inside-avoid-column border-[1px] border-base-content border-opacity-10"
            >
              <div className="flex items-center gap-2">
                <img
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  width={34}
                  height={34}
                  src={review.picture}
                  alt={`Photo de profil de ${review.name}`}
                />
                <span className="capitalize font-normal">
                  {firstname + " " + lastname}.
                </span>
              </div>
              <div className="flex md:mt-3 gap-0.5">
                {[...Array(review.note)].map((e, i) => (
                  <span
                    key={i}
                    className="mask mask-star-2 bg-yellow-400 w-4 h-4"
                  ></span>
                ))}
              </div>
              <div className="py-3">
                <p className="line-clamp-8 text-sm font-light">
                  {review.message}
                </p>
              </div>
              <small className="opacity-60">{review.date}</small>
            </div>
          );
        })}
      </div>
    </div>
  );
}
