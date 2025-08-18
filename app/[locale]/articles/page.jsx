import BlogPage from "./page/[page]/page";

export default function page() {
  return <BlogPage params={{ page: "1" }} />;
}

export async function generateMetadata() {
  return {
    title:
      "Tous mes articles | Brice Eliasse - Blog et Actualités d'un Développeur Web Freelance à Nice",
    description:
      "Parcourez tous les articles de Brice Eliasse, développeur web freelance à Nice. Découvrez des conseils, actualités et astuces sur le développement web.",
  };
}
