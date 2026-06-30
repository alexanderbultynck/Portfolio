'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projecten' },
    { href: '/cv', label: 'CV' },
    { href: '/contact', label: 'Contact' },
];

export default function Header() {
    const pathname = usePathname()

    return (
        <header>
            <nav className="text-center grid grid-cols-4 gap-4 p-4 bg-gray-200">
                {navLinks.map(link => (
                    <Link 
                    key={link.href} 
                    href={link.href} 
                    className={`transition-colors duration-300 hover:text-blue-500 ${pathname === link.href ? 'text-blue-500' : 'text-gray-700 '}`}
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>
        </header>
    )
}