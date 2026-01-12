"use client"

import * as React from "react"
import Link from "next/link"
import { siteConfig } from "@/site-config"

const allNavItems = [
    { id: "tech", name: "TECH", href: "#tech" },
    { id: "journal", name: "JOURNAL", href: "#journal" },
    { id: "photography", name: "PHOTOGRAPHY", href: "#photography" },
    { id: "projects", name: "PROJECTS", href: "#projects" },
    { id: "about", name: "ABOUT", href: "#about" },
]

export function Navbar() {
    const visibleNavItems = allNavItems.filter(
        (item) => siteConfig.sections[item.id as keyof typeof siteConfig.sections]
    )

    return (
        <nav className="fixed top-0 left-0 w-full z-40 bg-background/80 backdrop-blur-md border-b border-foreground/5">
            <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tighter">
                    {siteConfig.initials}
                </Link>
                <div className="hidden md:flex gap-8">
                    {visibleNavItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-xs font-bold tracking-[0.2em] hover:opacity-100 opacity-50 transition-opacity"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
                <div className="md:hidden text-xs font-bold tracking-[0.2em]">MENU</div>
            </div>
        </nav>
    )
}
