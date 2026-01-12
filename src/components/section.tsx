"use client"

import { useEffect, useRef, ReactNode } from "react"

interface SectionProps {
    children: ReactNode
    className?: string
    id?: string
}

export function Section({ children, className = "", id }: SectionProps) {
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active")
                    }
                })
            },
            { threshold: 0.1 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section
            id={id}
            ref={sectionRef}
            className={`reveal py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto w-full ${className}`}
        >
            {children}
        </section>
    )
}
