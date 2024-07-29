
import { fetchBlogPostBySlug, fetchStaticParams } from '@/lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import style from '@/style/article.module.css'
import Link from 'next/link';
import Head from 'next/head';



export async function generateStaticParams() {
    return await fetchStaticParams();
}

export async function generateMetadata({ params }) {
    const article = await fetchBlogPostBySlug(params.slug)

    return {
        title: article.title,
        description: article.metaDesc
    }
}

export default async function page({ params }) {
    const { slug } = params
    const data = await fetchBlogPostBySlug(slug);


    return (
        <>
            <Head>
                <title>{data.title}</title>
                <meta name="description" content={data.metaDesc} />
            </Head>
            <div className='max-w-screen-lg m-auto py-20'>
                <Link href="/" >
                    <svg

                        fill="none"
                        aria-hidden="true"
                        className="h-10 w-10 border-[1px]  rounded-full p-1  stroke-gray-100"
                        viewBox="0 0 16 16"
                    >
                        <path d="M7.25 11.25L3.75 8m0 0l3.5-3.25M3.75 8h8.5"></path>
                    </svg>
                </Link>
                <h1 className='text-3xl font-semibold tracking-wide mt-8'>{data.title}</h1>
                <img src={data.image.fields.file.url} className='w-full rounded-lg mt-6' alt="Illustration principale" />
                <div className={`py-10 ${style.article}`}>
                    {documentToReactComponents(data.body)}
                </div>
            </div>
        </>
    )
}