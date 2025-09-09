type DemoSlugProps = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function DemoSlug({ params }: DemoSlugProps) {
    const slug = (await params).slug;
    return (
        <>
            <h1 className="text-4xl">{slug}</h1>
        </>
    );
}