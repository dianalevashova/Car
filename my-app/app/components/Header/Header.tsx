'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import css from './Header.module.css';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/catalog', label: 'Catalog' },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  return (
    <header className={isHome ? css.header : `${css.header} ${css.headerBlue}`}>
      <div className={css.container}>
        <Link href="/" className={css.logo}>
          <svg width={104} height={16} aria-hidden="true">
            <use href={'/images/Logo.svg'} />
          </svg>
        </Link>

        <nav className={css.nav}>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={
                pathname === href
                  ? `${css.navLink} ${css.navLinkActive}`
                  : css.navLink
              }
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
