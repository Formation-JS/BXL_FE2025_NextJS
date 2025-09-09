
export default function ProductLayout({ children }: { children: React.ReactNode; }) {

    return (
        <>
            <h1 className="text-4xl">Produit 🛠</h1>
            {children}
        </>
    );
}