import { fetchBlogPosts } from '@/lib/contentful';
import Card from '@/components/articles/Card';

export default async function page() {
    const articles = await fetchBlogPosts()

    return (
        <div className='max-w-screen-lg m-auto py-8 px-4'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl text-center pb-4 font-bold tracking-normal mt-6 md:mt-12'>Tous mes articles</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                {
                    articles.map((article, i) => <Card data={article} key={i} />)
                }
            </div>
        </div>
    )
}
