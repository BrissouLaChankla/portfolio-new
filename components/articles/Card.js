import Link from "next/link"

export default function Card({ data }) {

    return (
        <article className="overflow-hidden rounded-lg border border-base-neutral bg-neutral shadow-sm">
            <img
                alt="Illustration principale de l'article"
                src={data.image.fields.file.url}
                className="h-56 w-full object-cover"
            />

            <div className="p-4 sm:p-6">
                <Link href={`/articles/${data.slug}`}>
                    <h3 className="text-lg font-medium text-neutral-content">
                        {data.title}
                    </h3>
                </Link>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    {data.metaDesc}
                </p>

                <Link href={`/articles/${data.slug}`}
                    className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Lire l'article

                    <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                        &rarr;
                    </span>
                </Link>
            </div>
        </article>
    )
}
