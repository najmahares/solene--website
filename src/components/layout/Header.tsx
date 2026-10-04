import Image from "next/image";
import Link from "next/link";
import { HEADER_CTA, MAIN_CONTENT_ID, MAIN_NAV, SITE } from "@/config/site";
import { NavLinks } from "./NavLinks";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.skipLink} href={`#${MAIN_CONTENT_ID}`}>
        Skip to main content
      </a>
      <div className={styles.inner}>
        <Link href="/" aria-label={`${SITE.name} home`} className={styles.logoLink}>
          <Image
            src="/images/solene-logo.svg"
            alt=""
            width={96}
            height={52}
            className={styles.logo}
            priority
          />
        </Link>
        <NavLinks items={MAIN_NAV} cta={HEADER_CTA} />
      </div>
    </header>
  );
}