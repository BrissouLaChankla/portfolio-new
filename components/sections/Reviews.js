const reviews = [
  {
    "picture": "https://lh3.googleusercontent.com/a-/ALV-UjUYpg9yC7IHTmFnVVFbBhRET2zrOclrka_WiGbYoVI3rg=s40-c-rp-mo-br100",
    "name": "Theo Chastre Pradat",
    "note": 5,
    "message": "Ayant eu l'occasion de travailler avec Brice, c'est un excellent développeur et son deuxième rôle de formateur facilite la communication et le transfert d'informations dans tous les projets. Son talent pour insuffler une touche de jeunesse",
    "date": "il y a un mois"
  },
  {
    "picture": "https://lh3.googleusercontent.com/a/ACg8ocI3CBGnXmOWTQBQrGjtA6eaLdi1vpw9Gg2htHPPfQxx4g=s40-c-rp-mo-ba2-br100",
    "name": "Maxime Gomez-Duret",
    "note": 5,
    "message": "Je travaille avec Brice Eliasse au quotidien en tant que formateur, et je tiens à souligner son expertise remarquable dans notre domaine. Brice est non seulement un développeur talentueux avec une vaste gamme de compétences techniques, mais",
    "date": "il y a un mois"
  },
  {
    "picture": "https://lh3.googleusercontent.com/a/ACg8ocLZ-KxPthVCyeKI79RVgTfjwwQr5G6t6xe8PoaTuS2_-A=s40-c-rp-mo-ba3-br100",
    "name": "Johan B",
    "note": 5,
    "message": "J'ai eu le plaisir de suivre une formation dispensée par Brice Eliasse en tant que formateur et développeur web, et je suis extrêmement satisfait de l'expérience. Brice combine avec brio son expertise technique approfondie avec une approche",
    "date": "il y a un mois"
  },
  {
    "picture": "https://lh3.googleusercontent.com/a/ACg8ocJxzF98smBXWw4M-4U2kIZdfpQCcevFgcCu4CbJrY-w=s40-c-rp-mo-br100",
    "name": "Romain Vuillaume",
    "note": 5,
    "message": "Formateur expérimenté ! Brice est très pédagogue et se rend disponible pour ses élèves. Il sait s'adapter à son audience. Je suis très satisfait de son engagement lors de ma formation. Ses compétences variées et approfondies sur plusieurs technologies sont fortement appréciées. Je vous recommande vivement ses services !",
    "date": "il y a 4 semaines"
  },
  {
    "picture": "https://lh3.googleusercontent.com/a/ACg8ocL5eLgDGbzoo3w3CGo6SEPy6grwfNG6hO7LDqSwGnTX=s40-c-rp-mo-br100",
    "name": "rémi vialle",
    "note": 5,
    "message": "Étant designer j'ai pu côtoyer un grand nombre de développeurs et je peux vous le dire avec certitude, Brice est le meilleur ! C'est quelqu'un de très professionnel, pédagogue et toujours en quête d'amélioration. Si vous avez envie d'apprendre ou vous avez un projet c'est lui qu'il vous faut !",
    "date": "il y a un mois"
  },
  {
    "picture": "https://lh3.googleusercontent.com/a/ACg8ocJbQiXMnVvFcHnriP-T2DEaCPbHyLmHqiQ5fmC6q5dZ=s40-c-rp-mo-br100",
    "name": "Asdrey Drey",
    "note": 5,
    "message": "Un immense merci à Brice pour ton enseignement et ton soutien dans cette expérience.\nTu as su me transmettre tes connaissances avec une clarté et une passion",
    "date": "il y a 3 semaines"
  },
  {
    "picture": "https://lh3.googleusercontent.com/a-/ALV-UjULC83iIBnyeoeeCpk2YNTc_Q76fqk6r52EQ86zjB0EeXE=s40-c-rp-mo-br100",
    "name": "Andrea Giuglaris",
    "note": 5,
    "message": "En tant que Directeur du centre de formation La Capsule Nice, je recommande fortement Brice pour son sérieux et ses capacités d'animation lors des sessions de formation en développement web.",
    "date": "il y a un mois"
  },
  {
    "picture": "https://lh3.googleusercontent.com/a-/ALV-UjUY2gGXXoVWrLOrs1kbWSZljXZSpA1IeeENxHp58LoxXw=s40-c-rp-mo-br100",
    "name": "Benoit",
    "note": 5,
    "message": "J'ai pu suivre une formation avec Brice pour me réorienter en développement web, pédagogue, patient et très investis, un plaisir d'avoir pus apprendre auprès de Brice, il a su transmettre tout son savoir pour nous permettre d'avoir avec brio notre diplôme.",
    "date": "il y a un mois"
  },
  {
    "picture": "https://lh3.googleusercontent.com/a/ACg8ocJSFkmSRBbkZrWg0WbKcqhweLlLxVhvx7j9eqmKpj2O=s40-c-rp-mo-br100",
    "name": "Clement Fraissinet",
    "note": 5,
    "message": "Brice m'a enseigné la programmation web durant 3 mois et ce fût une expérience très enrichissante. Grâce à sa patience et à sa pédagogie, j'ai appris le HTML/CSS, Javascript, React et les frameworks NextJs et ExpressJS plutôt facilement. Aujourd'hui et grâce à ses cours, je suis développeur Full-stack en agence à Nice 🙏",
    "date": "il y a un mois"
  },
  {
    "picture": "https://lh3.googleusercontent.com/a/ACg8ocIqdF0ePTkvUTY29ypv4U1yBcqouunzSdJC27Sbvwxk=s40-c-rp-mo-br100",
    "name": "Nikita Kofman",
    "note": 5,
    "message": "J'ai eu la chance d'avoir Brice comme professeur à La Capsule, et je suis entièrement satisfait de sa méthodologie d'enseignement. Il faisait preuve de patience lorsque je rencontrais des difficultés de compréhension et savait reformuler les explications de manière à ce que je les saisisse clairement.",
    "date": "il y a un mois"
  },
  {
    "picture": "https://lh3.googleusercontent.com/a/ACg8ocJt-DVH2W5X25NO_MzV2cs6qM1NnRoVM7yoaf9oQmJY=s40-c-rp-mo-br100",
    "name": "Wilfried",
    "note": 5,
    "message": "Un très bon professeur pédagogue, patient pour former et expliquer les bases du développement web avec qui on a bien rigoler lors de ces 3 mois de formation à la capsule.\nMerci Brice !!",
    "date": "il y a un mois"
  },
  {
    "picture": "https://lh3.googleusercontent.com/a-/ALV-UjWGEcLN6YHTZIz7jmQ9KBguMifNa0D1ac4b9jHI4a5Q2rw=s40-c-rp-mo-br100",
    "name": "Meghan Bégué",
    "note": 5,
    "message": "J’ai eu le plaisir de travailler avec Brice. C’est quelqu’un de professionnel, sérieux et à l’écoute. Je n’hésiterai pas à le recontacter si besoin !",
    "date": "il y a un mois"
  },
  {
    "picture": "https://lh3.googleusercontent.com/a/ACg8ocK5Tk6mgxmr1-ZOu9_0uLGCLwJ318o5OYZgWzwWq75k=s40-c-rp-mo-br100",
    "name": "Cédric Beillevaire",
    "note": 5,
    "message": "Professionnel, disponible et pédagogue, Brice à toutes les qualités et les compétences pour vous enseigner le développement web.",
    "date": "il y a un mois"
  },
  {
    "picture": "https://lh3.googleusercontent.com/a-/ALV-UjXtMXsB3SESoo71r25O2oQfDKiK7riciTIm5A2nsFoNM5I=s40-c-rp-mo-br100",
    "name": "Alexandre Pastor",
    "note": 5,
    "message": "Suberbe prof a l'écoute de ses élèves, j'ai vraiment adorer ses 10 semaines de formations de dev avec Brice",
    "date": "il y a 3 semaines"
  },
  {
    "picture": "https://lh3.googleusercontent.com/a/ACg8ocJwh0Mwmles9J4D5t3NKMJeTxm_RLKJSGixw8LnExzO=s40-c-rp-mo-br100",
    "name": "Nico Müller",
    "note": 5,
    "message": "Je ne saurais mieux faire que de recommander vivement Brice pour ses habiles talents de concepteur web. Particulièrement efficace, il a su être à l'écoute et à pu donner l’impulsion nécessaire à mon site. Ce fut un plaisir de collaborer avec lui.",
    "date": "il y a 5 ans"
  },
  {
    "picture": "https://lh3.googleusercontent.com/a-/ALV-UjWEQ5EKYlYy_QFw9GOv3K2xQh4eslhNIfoLqNWEE6UxGBg=s40-c-rp-mo-br100",
    "name": "Tony Giordano",
    "note": 5,
    "message": "La perfection d’un jeune et talentueux développeur !",
    "date": "il y a un mois"
  },
  {
    "picture": "https://lh3.googleusercontent.com/a-/ALV-UjXLfe79Ssrhk1A6TaDB9R7ifQD1tENvv_utKpbZNJ7DbbMX=s40-c-rp-mo-ba2-br100",
    "name": "Tugdual Harel",
    "note": 5,
    "message": "Après de nombreux projets menés avec Brice, je peux témoigner qu'il cherche à satisfaire au mieux vos demandes, à travers des prestations correspondant à vos attentes et au prix le plus juste.",
    "date": "il y a 4 ans"
  },
  {
    "picture": "https://lh3.googleusercontent.com/a/ACg8ocIjCEq1nA-nHvE7fPCzMpAIVsWew2qjT6YXK9i5OCSg=s40-c-rp-mo-br100",
    "name": "Terence Rajapaksage",
    "note": 5,
    "message": "Personne investie dans son domaine, à recommander !",
    "date": "il y a un mois"
  },
  {
    "picture": "https://lh3.googleusercontent.com/a-/ALV-UjURi3Wl6zeNx0i2GfIH4VlRP1uzITvVDfik190s226rHxk=s40-c-rp-mo-br100",
    "name": "Guillaume ARMAND",
    "note": 5,
    "message": "Un plaisir de travailler à ses côtés. Talentueux, professionnel, à l'écoute, polyvalent, et un portfolio qui donne envie.",
    "date": "il y a 4 ans"
  },
  {
    "picture": "https://lh3.googleusercontent.com/a-/ALV-UjWMjB1IVCsuHnoXTC6ZxEoo368V-IJSID-eIteujlYvyDyM=s40-c-rp-mo-ba4-br100",
    "name": "Grégory Gérard",
    "note": 5,
    "message": "Très bon développeur capable de répondre à vos demandes précisément et rapidement.",
    "date": "il y a 4 ans"
  },
  {
    "picture": "https://lh3.googleusercontent.com/a/ACg8ocJ7i2WDgMJdI9iuUDlGbSHPpTXZAiKbckbFET_ItLqc=s40-c-rp-mo-br100",
    "name": "Veronique Azzopardi",
    "note": 5,
    "message": "J ai été élevé de Brice, c est personne passionnée par son travail, il est incroyablement rapide pour trouver les solutions adéquates, pédagogue dans l âme, travail qualitatif dans ses conceptions , je recommande à 200%",
    "date": "il y a 2 jours"
  },
  {
    "picture": "https://lh3.googleusercontent.com/a/ACg8ocIEdc_S0GL3gnNKCE3Jw_USzSfw-9Zqjy6iY-KKKEH_=s40-c-rp-mo-br100",
    "name": "Pierre-Olivier Bruneau",
    "note": 5,
    "message": "j'ai participé à une formation dispensée par Brice, j'ai été très bien formé au métier de développeur, il est très pédagogue et il aime son métier cela s'est ressenti tout au long de la formation",
    "date": "il y a un jour"
  },
  {
    "picture": "https://lh3.googleusercontent.com/a/ACg8ocJoYKfTHJNUjX_eKte81eUYWMZs-PE42b71ODMsiZ76=s40-c-rp-mo-br100",
    "name": "pierre sesmat",
    "note": 5,
    "message": "J'ai eu l'opportunité de travailler avec Brice pour le projet G2 Esports et je ne peux que recommander ses services : exécution rapide et qualitative et flexible !",
    "date": "il y a 2 jours"
  },
  {
    "picture": "https://lh3.googleusercontent.com/a/ACg8ocJW9gCzfXHGDrgeCD6ani1Wvr24_ne0vkqgqwJ3Eu1svg=s40-c-rp-mo-br100",
    "name": "Maxime Maillot",
    "note": 5,
    "message": "Aspects positifs : Rapport qualité-prix",
    "date": "il y a 3 ans"
  }
]



import Image from "next/image"
import AnimatedStars from "../ui/AnimatedStars";
export default function Reviews() {
  return (
    <div className="section">

      <AnimatedStars />
      <h2 className="text-center">Si vous doutiez encore<div className="text-primary">laissez les vous convaincre</div></h2>
      <div className="gap-4 columns-3xs py-14 ">
        {reviews.map((review, i) => {
          let words = review.name.split(' ');
          const firstname = words.shift();
          const lastname = words.join('')[0] || "X";
          return (
            <div key={i} className='bg-base-200 rounded-lg p-6 mb-4 break-inside-avoid-column border-[1px] border-base-content border-opacity-10'>
              <div className='flex items-center gap-2'>
                <img referrerPolicy="no-referrer" loading="lazy" width={34} height={34} src={review.picture} alt={`Photo de profil de ${review.name}`} />
                <span className='capitalize font-normal'>{firstname + " " + lastname}.</span>
              </div>
              <div className="flex mt-3 gap-0.5">
                {
                  [...Array(review.note)].map((e, i) => <span key={i} className="mask mask-star-2 bg-yellow-400 w-4 h-4"></span>)
                }
              </div>
              <div className="py-3">
                <p className='line-clamp-8 text-sm font-light'>{review.message}</p>
              </div>
              <small className='opacity-60'>{review.date}</small>
            </div>
          )
        }
        )}
      </div>
    </div>
  )
}
