'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/** Sections on the home page, in document order. */
const SECTIONS = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
];

/** What fits in the bar on a wide screen. The rest lives in the menu. */
const PRIMARY = ['about', 'experience', 'skills', 'projects'];

export default function Header() {
    const pathname = usePathname();
    const onHome = pathname === '/';

    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Track which section is in view, so the bar says where you are.
    useEffect(() => {
        if (!onHome) {
            setActive('');
            return;
        }
        const els = SECTIONS
            .map((s) => document.getElementById(s.id))
            .filter((el): el is HTMLElement => el !== null);
        if (els.length === 0) return;

        const io = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
                if (visible[0]) setActive(visible[0].target.id);
            },
            { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
        );
        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, [onHome]);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false);
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    const href = (id: string) => (onHome ? `#${id}` : `/#${id}`);

    return (
        <header className={scrolled ? 'site-header is-scrolled' : 'site-header'}>
            <div className="site-header__inner">
                <Link href="/" className="wordmark" onClick={() => setMenuOpen(false)}>
                    <span className="wordmark__key" aria-hidden />
                    <span className="wordmark__text">
                        <strong>Faheem Arshad</strong>
                        <small>Computer vision and ML</small>
                    </span>
                </Link>

                <nav className="site-nav" aria-label="Main">
                    {SECTIONS.filter((s) => PRIMARY.includes(s.id)).map((s) => (
                        <a
                            key={s.id}
                            href={href(s.id)}
                            className={active === s.id ? 'is-active' : undefined}
                        >
                            {s.label}
                        </a>
                    ))}
                    <Link
                        href="/research"
                        className={pathname === '/research' ? 'is-active' : undefined}
                    >
                        Research
                    </Link>
                    <a href={href('contact')} className="nav-cta">Get in touch</a>
                </nav>

                <button
                    className="nav-toggle"
                    aria-expanded={menuOpen}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    onClick={() => setMenuOpen((v) => !v)}
                >
                    <span className={menuOpen ? 'bars is-open' : 'bars'}>
                        <i /><i /><i />
                    </span>
                </button>
            </div>

            {menuOpen && (
                <div className="nav-sheet">
                    {SECTIONS.map((s) => (
                        <a key={s.id} href={href(s.id)} onClick={() => setMenuOpen(false)}>
                            {s.label}
                        </a>
                    ))}
                    <Link href="/research" onClick={() => setMenuOpen(false)}>Research</Link>
                    <a
                        href={href('contact')}
                        className="nav-cta"
                        onClick={() => setMenuOpen(false)}
                    >
                        Get in touch
                    </a>
                </div>
            )}
        </header>
    );
}
