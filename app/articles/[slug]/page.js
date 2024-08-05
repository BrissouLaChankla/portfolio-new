
import { fetchBlogPostBySlug, fetchStaticParams } from '@/lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import style from '@/style/article.module.css'
import Link from 'next/link';
import Head from 'next/head';
// new article
const options = {
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
            const { file, title } = node.data.target.fields;
            const url = file.url;
            const alt = title ? title : 'Embedded image';
            return <img src={url} alt={alt} loading='lazy' style={{ width: '100%', height: '400px', objectFit: "cover" }} />;
        },
    },
};

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
            <div className='max-w-screen-lg m-auto py-10 md:py-14 px-4'>
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
                <div className="flex flex-col gap-3">

                    <h1 className='text-3xl md:text-4xl lg:text-5xl text-center pb-4 font-bold tracking-normal mt-6 md:mt-12'>{data.title}</h1>
                    <p className='text-center max-w-screen-sm m-auto'>{data.metaDesc}</p>
                    <div className='flex items-center justify-center my-4 gap-3'>
                        <img src="/avatar/full.webp" height={50} width={50} className='border-2 rounded-full h-14 w-14 border-primary ' alt="Avatar de Brice Eliasse" />
                        <div className='flex flex-col'>
                            <span className='font-semibold'>Brice Eliasse</span>
                            <small className='capitalize'>{new Date(data.image.sys.updatedAt).toLocaleDateString("fr-FR", {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}</small>
                        </div>
                    </div>
                </div>
                <img src={data.image.fields.file.url} className='w-full rounded-lg mt-6' alt="Illustration principale" />
                <div className={`md:py-10 ${style.article}`}>
                    {documentToReactComponents(data.body, options)}
                </div>
            </div>
        </>
    )
}