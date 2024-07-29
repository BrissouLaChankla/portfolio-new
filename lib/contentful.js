import { createClient } from 'contentful';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function fetchBlogPosts() {
    const response = await client.getEntries({
        content_type: 'blogPage',
        // select: 'fields.slug',
    });
    return response.items.map((item) => item.fields);
}

export async function fetchBlogPostBySlug(slug) {
    const response = await client.getEntry({
        content_type: 'blogPage',
        // 'fields.slug': slug,
    });
    return response.fields;
}

export async function fetchStaticParams() {
    const posts = await client.getEntries({
        content_type: 'blogPage',
        select: 'fields.slug',
    });

    return posts.items.map((items) => ({
        slug: items.fields.slug,
    }))
}