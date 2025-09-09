import blogData from '@/data/blog-data.json';
import { redirect } from 'next/navigation';

type DemoSlugProps = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function BlogPostPage({ params }: DemoSlugProps) {
    const slug = (await params).slug;

    const post = blogData.find(blog => blog.slug === slug);

    if(!post) {
        redirect('/blog');
    }

    return (
        <>
            <h1 className="text-4xl">{post.title}</h1>
            <h2>{post.date}</h2>
            <p>{post.content}</p>
        </>
    );
}