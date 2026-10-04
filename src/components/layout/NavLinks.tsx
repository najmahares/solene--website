"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/config/site";
import styles from "./Header.module.css";

type NavLinksProps = {
  readonly items: readonly NavItem[];
  readonly cta: NavItem;
};

function isActive(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function NavLinks({ items, cta }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Main">
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={styles.link}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          </li>
        ))}
        <li>
          <Link href={cta.href} className={styles.cta}>
            {cta.label}
          </Link>
        </li>
      </ul>
    </nav>
  );
}