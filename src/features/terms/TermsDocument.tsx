import { MAIN_CONTENT_ID, SITE } from "@/config/site";
import { CONTACT_SECTION, TERMS_META, TERMS_SECTIONS } from "./termsContent";
import styles from "./TermsDocument.module.css";

const TOC_ENTRIES = [
  ...TERMS_SECTIONS.map(({ id, title }) => ({ id, title })),
  { id: CONTACT_SECTION.id, title: CONTACT_SECTION.title },
];

export function TermsDocument() {
  return (
    <main id={MAIN_CONTENT_ID} tabIndex={-1} className={styles.page}>
      <h1 className={styles.title}>Terms and Conditions</h1>
      <p className={styles.updated}>
        Last updated: {TERMS_META.lastUpdated} (version {TERMS_META.version})
      </p>
      {TERMS_META.isDraft ? (
        <p className={styles.draft} role="note">
          Draft for legal review. These terms are not final.
        </p>
      ) : null}

      <nav aria-label="On this page" className={styles.toc}>
        <ol>
          {TOC_ENTRIES.map((entry) => (
            <li key={entry.id}>
              <a href={`#${entry.id}`}>{entry.title}</a>
            </li>
          ))}
        </ol>
      </nav>

      {TERMS_SECTIONS.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          aria-labelledby={`${section.id}-heading`}
          className={styles.section}
        >
          <h2 id={`${section.id}-heading`}>
            {index + 1}. {section.title}
          </h2>
          {section.paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
          {section.items && section.items.length > 0 ? (
            <ul>
              {section.items.map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}

      <section
        id={CONTACT_SECTION.id}
        aria-labelledby={`${CONTACT_SECTION.id}-heading`}
        className={styles.section}
      >
        <h2 id={`${CONTACT_SECTION.id}-heading`}>
          {TERMS_SECTIONS.length + 1}. {CONTACT_SECTION.title}
        </h2>
        <p>
          For questions about these terms, to use your data rights or to report a security issue,
          email <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}.</a> 
        </p>
      </section>
    </main>
  );
}