import AnimatedTools from "../ui/AnimatedTools";

const technos = [
  { slug: "nextjs", link: "https://nextjs.org/", tooltip: "Next.js" },
  { slug: "react", link: "https://react.dev/", tooltip: "React" },
  { slug: "vuejs", link: "https://vuejs.org/", tooltip: "Vue.js" },
  { slug: "tailwind", link: "https://tailwindcss.com", tooltip: "Tailwind CSS" },
  { slug: "daisyui", link: "https://daisyui.com", tooltip: "DaisyUI" },

  { slug: "laravel", link: "https://laravel.com/", tooltip: "Laravel" },
  { slug: "express", link: "https://expressjs.com", tooltip: "Express" },
  { slug: "mongodb", link: "https://mongodb.com/", tooltip: "MongoDB" },
  { slug: "mongoose", link: "https://mongoosejs.com/", tooltip: "Mongoose" },
  { slug: "prisma", link: "https://www.prisma.io/", tooltip: "Prisma" },

  { slug: "redux", link: "https://redux.js.org/", tooltip: "Redux" },
  { slug: "wordpress", link: "https://wordpress.org/", tooltip: "WordPress" },
  { slug: "elementor", link: "https://elementor.com/", tooltip: "Elementor" },
  { slug: "bootstrap", link: "https://getbootstrap.com/", tooltip: "Bootstrap" },
  { slug: "nodejs", link: "https://nodejs.org/", tooltip: "Node.js" },

  { slug: "socketio", link: "https://socket.io/", tooltip: "Socket.IO" },
  { slug: "react-native", link: "https://reactnative.dev", tooltip: "React Native" },
  { slug: "shadcn", link: "https://ui.shadcn.com/", tooltip: "Shadcn" },
  { slug: "git", link: "https://git-scm.com", tooltip: "Git" },
  { slug: "vercel", link: "https://vercel.com/", tooltip: "Vercel" },
];

export default function Tools() {
  return (
    <div className="section grid grid-cols-12 items-center gap-6 lg:gap-14">

      <div className="col-span-12 md:order-1 md:col-span-6 flex flex-col gap-6">
        <h2>Voici mes stacks de<br /><span className="text-primary">prédilection</span></h2>
        <p>Je suis la philosophie <i>ship first</i> — lancer rapidement pour itérer ensuite. Pour ce faire, j'utilise un ensemble d'outils mordernes pouvant couvrir l'intégralité de n'importe quel projet. C'est comme ça que je peux transformer rapidement une idée en un produit fonctionnel et sécurisé.</p>
        <div className="flex gap-3">
          {/* <div className="btn btn-neutral btn-sm">Learn about Views</div> */}
          {/* <div className="btn btn-outline btn-sm">Learn about Views</div> */}
        </div>
      </div>
      <div className="col-span-12  md:col-span-6 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-8">
        {technos.map((techno) => <AnimatedTools key={techno.slug}  {...techno} />)}
      </div>
    </div>
  )
}
