import Link from "next/link.js";

const links = [
    { href: '/', name: 'Accueil', icon: '🏡' },
    { href: '/demo', name: 'Demo', icon: '🧪' },
    { href: '/product', name: 'Produit', icon: '📦'},
    { href: '/blog', name: 'Blog', icon: '📚' }
];

export default function NavBar() {
    return (
        <ul className="flex flex-row gap-2">
            {links.map(({ href, name, icon }) => (
                <li key={href}>
                    <Link href={href} className="flex flex-row gap-1">
                        <span>{icon}</span>
                        <span className="hidden sm:block">{name}</span>
                    </Link>
                </li>
            ))}
        </ul>
    );
}