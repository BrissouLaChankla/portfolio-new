import { fetchBlogPosts } from '@/lib/contentful';
import Link from 'next/link';

export default async function Footer() {
  const articles = await fetchBlogPosts()


  return (
    <div className="bg-base-200 text-base-content p-10 w-full ">
      <footer className="footer m-auto max-w-screen-xl">
        <aside>
          <a href="#">
            <img src="/logo.svg" className="w-12 h-12" width={160} height={160} quality={100} alt="Logo Brice Eliasse" />
          </a>
          <p>
            <span className="text-xl font-semibold tracking-normal">
              Brice Eliasse
            </span>

            <br />
            Copyright © {new Date().getUTCFullYear()} <span className="hidden sm:inline">- Tous droits réservés</span>
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Derniers articles</h6>
          {
            articles.map((article, i) => <Link key={i} href={`/articles/${article.slug}`} className="link link-hover">{article.title}</Link>)
          }
        </nav>
        <nav>
          <h6 className="footer-title">Coordonnées</h6>
          <span>Alpes-Maritimes - Nice</span>
          <span>SIRET : 92338669200019</span>
        </nav>
      </footer>
    </div>

  )
}

