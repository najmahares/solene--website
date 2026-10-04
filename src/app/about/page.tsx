import Image from "next/image";
import styles from "./AboutPage.module.css";

const values = [
  {
    title: "Evidence-led",
    description:
      "Use recorded observations and relevant information to support informed care.",
    icon: "evidence",
  },
  {
    title: "Conservation forward",
    description:
      "Support the long-term health of mountain gorillas and the ecosystems they depend on.",
    icon: "mountain",
  },
  {
    title: "Human judgment",
    description:
      "Keep field expertise and veterinary decisions at the centre of care.",
    icon: "people",
  },
] as const;

const principles = [
  {
    title: "Observe",
    description:
      "Preserve individual case histories from field observations, even when teams work offline.",
    icon: "observe",
  },
  {
    title: "Connect",
    description:
      "Link observations over time to build a more complete picture of each gorilla’s health.",
    icon: "connect",
  },
  {
    title: "Decide",
    description:
      "Give conservation and veterinary teams a clearer picture for follow-up and action.",
    icon: "decide",
  },
] as const;

const team = [
  {
    name: "Gladys Ouma",
    role: "Backend Engineer",
    description:
      "Helps build the systems that organise and connect gorilla health records.",
  },
  {
    name: "Lavigne Nancy",
    role: "Data Engineer",
    description:
      "Supports reliable data organisation for meaningful health insights.",
  },
  {
    name: "Najma Hares",
    role: "AI and ML Engineer",
    description:
      "Explores how data and AI can support informed conservation decisions.",
  },
  {
    name: "Ariam Kidanemariam",
    role: "Full-Stack Developer",
    description:
      "Connects the website, application interfaces and supporting services.",
  },
  {
    name: "Eyoba Mulubrihan",
    role: "Data Engineer",
    description:
      "Helps maintain structured information that teams can use over time.",
  },
] as const;

function PrincipleIcon({ name }: { name: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  if (name === "evidence") {
    return (
      <svg viewBox="0 0 48 48" {...common}>
        <path d="M12 5h17l8 8v7" strokeWidth="3.8" />
        <path d="M29 5v9h9M12 5v38h13" strokeWidth="3.8" />
        <circle cx="30" cy="30" r="8" strokeWidth="4" />
        <path d="m36 36 7 7" strokeWidth="4.5" />
      </svg>
    );
  }

  if (name === "mountain") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path
          d="M3 40 15 11 24 29 35 3 47 40Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === "people") {
    return (
      <svg viewBox="0 0 48 48" {...common}>
        <g fill="currentColor" stroke="currentColor" strokeWidth="2.5">
          <circle cx="24" cy="10" r="5" />
          <circle cx="10" cy="15" r="4.5" />
          <circle cx="38" cy="15" r="4.5" />
        </g>
        <path d="M13 40V32a11 11 0 0 1 22 0v8Z" strokeWidth="3.5" />
        <path
          d="M2 37v-5a8 8 0 0 1 8-8M46 37v-5a8 8 0 0 0-8-8"
          strokeWidth="3"
        />
      </svg>
    );
  }

  if (name === "observe") {
    return (
      <svg viewBox="0 0 48 48" {...common}>
        <circle cx="17" cy="30" r="9" />
        <path d="M11 22V12a5 5 0 0 1 10 0v10M30 22V12a5 5 0 0 1 10 0v10" />
        <circle cx="35" cy="30" r="9" />
        <path d="M17 25v10M35 25v10" />
      </svg>
    );
  }

  if (name === "connect") {
    return (
      <svg viewBox="0 0 48 48" {...common}>
        <path d="M19 29l-3 3a8 8 0 0 1-11-11l8-8a8 8 0 0 1 11 0" />
        <path d="M29 19l3-3a8 8 0 0 1 11 11l-8 8a8 8 0 0 1-11 0" />
        <path d="M17 31l14-14" />
      </svg>
    );
  }

  if (name === "decide") {
    return (
      <svg viewBox="0 0 48 48" {...common}>
        <circle cx="24" cy="12" r="5" />
        <circle cx="10" cy="18" r="4" />
        <circle cx="38" cy="18" r="4" />
        <path d="M13 38v-5a11 11 0 0 1 22 0v5zM3 37v-5a7 7 0 0 1 7-7M45 37v-5a7 7 0 0 0-7-7" />
      </svg>
    );
  }

  if (name === "vision") {
    return (
      <svg viewBox="0 0 48 48" {...common}>
        <path
          d="M3 24s7-13 21-13 21 13 21 13-7 13-21 13S3 24 3 24Z"
          strokeWidth="3.8"
        />
        <circle cx="24" cy="24" r="7" fill="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" {...common}>
      <circle cx="24" cy="12" r="5" />
      <circle cx="10" cy="18" r="4" />
      <circle cx="38" cy="18" r="4" />
      <path d="M13 38v-5a11 11 0 0 1 22 0v5zM3 37v-5a7 7 0 0 1 7-7M45 37v-5a7 7 0 0 0-7-7" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="about-heading">
        <div className={styles.heroImage} aria-hidden="true">
          <Image
            src="/images/virunga-landscape.png"
            alt=""
            fill
            priority
            sizes="(max-width: 768px) 100vw, 60vw"
            className={styles.coverImage}
          />
        </div>

        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>About Solène</p>
          <h1 id="about-heading">
            Protecting gorillas starts with knowing their health.
          </h1>
          <p className={styles.heroDescription}>
            We are an AkiraChix student-built health intelligence platform for
            mountain gorilla conservation teams in Rwanda. We help turn field
            observations into organised, continuous individual health records
            that can support veterinary and conservation decisions.
          </p>
        </div>
        <div className={styles.heroAccent} aria-hidden="true" />
      </section>

      <section className={styles.story} aria-labelledby="story-heading">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Our background</p>
          <h2 id="story-heading">Our Story</h2>
        </div>

        <div className={styles.storyGrid}>
          <div className={styles.storyImages}>
            <div className={`${styles.storyImage} ${styles.storyImageOne}`}>
              <Image
                src="/images/mountain-gorilla.png"
                alt="Mountain gorilla in its natural forest habitat"
                fill
                sizes="(max-width: 768px) 30vw, 160px"
                className={styles.coverImage}
              />
            </div>
            <div className={`${styles.storyImage} ${styles.storyImageTwo}`}>
              <Image
                src="/images/field-observation.png"
                alt="Conservation field team documenting observations"
                fill
                sizes="(max-width: 768px) 30vw, 160px"
                className={styles.coverImage}
              />
            </div>
            <div className={`${styles.storyImage} ${styles.storyImageThree}`}>
              <Image
                src="/images/field-researcher.png"
                alt="Field researcher observing the surrounding forest"
                fill
                sizes="(max-width: 768px) 30vw, 160px"
                className={styles.coverImage}
              />
            </div>
          </div>

          <div className={styles.storyCopy}>
            <p>
              Solène with a question: how can we help field teams turn
              individual observations into a clearer picture of a mountain
              gorilla’s health over time? As AkiraChix students, we explored
              this challenge by learning from the realities of field-based
              conservation work.
            </p>
            <p>
              We are building Canopy to help conservation teams carry knowledge
              forward, recognize changes over time and make more informed
              decisions for the gorillas in their care, leading to healthier
              gorillas, stronger ecosystems and resilient communities.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.why} aria-labelledby="why-heading">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Why it matters</p>
          <h2 id="why-heading">
            Important health observations should not disappear.
          </h2>
        </div>

        <div className={styles.principleGrid}>
          {principles.map((principle) => (
            <article className={styles.principleCard} key={principle.title}>
              <div className={styles.principleIcon}>
                <PrincipleIcon name={principle.icon} />
              </div>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.identity} aria-labelledby="identity-heading">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Our identity</p>
          <h2 id="identity-heading">Our Purpose, Values, and Vision</h2>
        </div>

        <div className={styles.identityPanel}>
          <div className={styles.valuesStrip} aria-label="Our values">
            {values.map((value) => (
              <div className={styles.valueItem} key={value.title}>
                <div className={styles.valueIcon}>
                  <PrincipleIcon name={value.icon} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>

          <div className={styles.missionVision}>
            <article className={styles.missionVisionCard}>
              <header className={styles.missionVisionHeader}>
                <span className={styles.headingIcon} aria-hidden="true">
                  <PrincipleIcon name="vision" />
                </span>
                <h3>Vision</h3>
              </header>
              <p>
                To be a trusted partner in mountain gorilla conservation, using
                data and technology to support healthier gorillas, stronger
                ecosystems and resilient communities.
              </p>
            </article>

            <article className={styles.missionVisionCard}>
              <header className={styles.missionVisionHeader}>
                <span className={styles.headingIcon} aria-hidden="true">
                  <PrincipleIcon name="decide" />
                </span>
                <h3>Mission</h3>
              </header>
              <p>
                To protect mountain gorillas by connecting field data,
                veterinary care and expert support, enabling timely decisions
                and better outcomes for gorillas and their habitat, thus saving
                an endangered species.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.team} aria-labelledby="team-heading">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Meet our team</p>
          <h2 id="team-heading">From research to real impact</h2>
        </div>

        <ul className={styles.teamGrid}>
          {team.map((member, index) => (
            <li className={styles.teamMember} key={member.name}>
              <div className={styles.teamPortrait}>
                <Image
                  src={`/images/team-${index + 1}.png`}
                  alt={`Portrait of ${member.name}`}
                  fill
                  sizes="(max-width: 600px) 35vw, (max-width: 900px) 20vw, 150px"
                  className={styles.coverImage}
                />
              </div>
              <h3>{member.name}</h3>
              <p className={styles.teamRole}>{member.role}</p>
              <p className={styles.teamDescription}>{member.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
