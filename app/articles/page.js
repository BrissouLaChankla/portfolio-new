import { createClient } from 'contentful';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

async function fetchBlogPosts() {
    const response = await client.getEntries({
        content_type: 'blogPage',
    });
    return response.items.map((item) => item.fields);
}

import Card from '@/components/articles/Card';

export const metadata = {
    title: 'Tous mes articles | Brice Eliasse - Blog et Actualités d\'un Développeur Web Freelance à Nice',
    description: 'Parcourez tous les articles de Brice Eliasse, développeur web freelance à Nice. Découvrez des conseils, actualités et astuces sur le développement web.',
}

export default async function page() {
    const articles = await fetchBlogPosts()

    return (
        <div className='max-w-screen-lg m-auto pt-8 pb-20 px-4'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl text-center pb-4 font-bold tracking-normal mt-6 md:mt-12'>Tous mes articles</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-6'>
                {
                    articles.map((article, i) => <Card data={article} key={i} />)
                }
            </div>
        </div>
    )
}
