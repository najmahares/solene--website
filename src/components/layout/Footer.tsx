import Image from "next/image";
import Link from "next/link";
import {
  MAIN_NAV,
  PRODUCT_LINKS,
  SITE,
  TERMS_PATH,
  type OptionalLinkItem,
} from "@/config/site";
import styles from "./Footer.module.css";

type LinkListProps = {
  readonly title: string;
  readonly links: readonly OptionalLinkItem[];
};

function LinkList({ title, links }: LinkListProps) {
  return (
    <nav aria-label={title} className={styles.column}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.list}>
        {links.map((link) => (
          <li key={link.label}>
            {link.href ? <Link href={link.href}>{link.label}</Link> : <span>{link.label}</span>}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <Image
          src="/images/solene-logo-light.svg"
          alt={SITE.name}
          width={120}
          height={64}
          className={styles.logo}
        />
        <LinkList title="Company" links={MAIN_NAV} />
        <LinkList title="Product" links={PRODUCT_LINKS} />
        <div className={styles.column}>
          <h2 className={styles.title}>Contact</h2>
          <ul className={styles.list}>
            <li>
              Email: <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>
            </li>
            <li>
              Phone: <a href={`tel:${SITE.contactPhone}`}>{SITE.contactPhone}</a>
            </li>
            <li>Location - {SITE.location}</li>
          </ul>
        </div>
      </div>
      <p className={styles.legal}>
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        <Link href={TERMS_PATH}>Terms and Conditions</Link>
      </p>
    </footer>
  );
}