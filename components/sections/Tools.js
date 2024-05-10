import { motion } from "framer-motion";
import Image from "next/image";

const technos = [
  { slug: "react", link: "https://reactjs.org/docs/getting-started.html", tooltip: "React" },
  { slug: "nextjs", link: "https://nextjs.org/docs", tooltip: "Next.js" },
  { slug: "laravel", link: "https://laravel.com/docs", tooltip: "Laravel" },
  { slug: "tailwind", link: "https://tailwindcss.com/docs", tooltip: "Tailwind CSS" },
  { slug: "daisyui", link: "https://daisyui.com/docs", tooltip: "DaisyUI" },
  { slug: "wordpress", link: "https://developer.wordpress.org/", tooltip: "WordPress" },
  { slug: "mongoose", link: "https://mongoosejs.com/docs/guide.html", tooltip: "Mongoose" },
  { slug: "mongodb", link: "https://docs.mongodb.com/", tooltip: "MongoDB" },
  { slug: "express", link: "https://expressjs.com/en/starter/installing.html", tooltip: "Express" },
  { slug: "nodejs", link: "https://nodejs.org/en/docs/", tooltip: "Node.js" },
  { slug: "bootstrap", link: "https://getbootstrap.com/docs/5.1/getting-started/introduction/", tooltip: "Bootstrap" },
  { slug: "elementor", link: "https://elementor.com/help/", tooltip: "Elementor" },
  { slug: "vuejs", link: "https://vuejs.org/guide/introduction.html", tooltip: "Vue.js" },
  { slug: "vercel", link: "https://vercel.com/docs", tooltip: "Vercel" },
  { slug: "git", link: "https://git-scm.com/doc", tooltip: "Git" },
  { slug: "react-native", link: "https://reactnative.dev/docs/getting-started", tooltip: "React Native" },
  { slug: "hono", link: "https://honojs.dev/docs/", tooltip: "Hono" },
  { slug: "shadcn", link: "https://shadcn.github.io/", tooltip: "Shadcn" },  // Verify if this link is correct
  { slug: "prisma", link: "https://www.prisma.io/docs/", tooltip: "Prisma" },
  { slug: "redux", link: "https://redux.js.org/introduction/getting-started", tooltip: "Redux" }
];

export default function Tools() {
  return (
    <div className="section grid grid-cols-12 items-center gap-14">
      <div className="col-span-12 md:col-span-6  grid grid-cols-4 sm:grid-cols-5 md:grid-cols-10 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-8">

        {technos.map(techno => (
          <span key={techno.slug} className="tooltip lg:hover:scale-110 transition" data-tip={techno.tooltip}>

            <a key={techno.slug} href={techno.link} className=" mask mask-squircle"  >
              <Image src={`/technos/${techno.slug}.svg`} alt={techno.slug} width={100} height={100} />
            </a>
          </span>
        ))}

      </div>
      <div className="col-span-12  md:col-span-6 flex flex-col gap-6">
        <h2>J'aime bien travailler<br /><span className="text-primary">Avec ces outils</span></h2>
        <p>We love Vue Single-File Components as much as you do. Simple, intuitive and powerful, Nuxt lets you write Vue components in a way that makes sense. Every repetitive task is automated, so you can focus on writing your full-stack Vue application with confidence.</p>
        <div className="flex gap-3">
          <div className="btn btn-neutral btn-sm">Learn about Views</div>
          <div className="btn btn-outline btn-sm">Learn about Views</div>
        </div>
      </div>
    </div>
  )
}
