import Link from "next/link";
import styles from "../css/home.module.css";
import BentoGrid from "@/components/BentoGrid";
import TextLink from "@/components/TextLink";
import Footer from "@/components/Footer";
import { Code } from "lucide-react";

export default function Home() {
  const langs = ["TypeScript", "PHP", "Rust", "Java", "Python"];

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.infoWrapper}>
          <span className={styles.nameWrapper}>
            <h1>Adrian Tobi</h1>
          </span>
          <span className={styles.currentEmployment}>
            Junior Developer at{" "}
            <TextLink
              href={"https://www.jeffreyai.com/"}
              target={"_blank"}
              title={"JeffreyAI"}
            />
          </span>
          <span className={styles.description}>
            <p>
              I’m a software engineer specializing in building and designing
              astonishing digital experiences for users.
            </p>
          </span>
          <span className={styles.socials}>
            <Link href={"https://www.linkedin.com/in/adriantd"} target="_blank">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
              </svg>
            </Link>
            <Link href={"https://github.com/Adriantobi"} target="_blank">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </Link>
            <Link href={"https://letterboxd.com/adriantd"} target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                height="20"
                width="20"
              >
                <path
                  fill="currentColor"
                  d="M8.224 14.352a4.447 4.447 0 0 1-3.775 2.092C1.992 16.444 0 14.454 0 12s1.992-4.444 4.45-4.444c1.592 0 2.988.836 3.774 2.092c-.427.682-.673 1.488-.673 2.352s.246 1.67.673 2.352M15.101 12c0-.864.247-1.67.674-2.352c-.786-1.256-2.183-2.092-3.775-2.092s-2.989.836-3.775 2.092c.427.682.674 1.488.674 2.352s-.247 1.67-.674 2.352c.786 1.256 2.183 2.092 3.775 2.092s2.989-.836 3.775-2.092A4.42 4.42 0 0 1 15.1 12zm4.45-4.444a4.447 4.447 0 0 0-3.775 2.092c.427.682.673 1.488.673 2.352s-.246 1.67-.673 2.352a4.447 4.447 0 0 0 3.775 2.092C22.008 16.444 24 14.454 24 12s-1.992-4.444-4.45-4.444z"
                />
              </svg>
            </Link>
            <TextLink
              href={"/pdf/Adrian-Tobi-FlowCV-Resume-20240609.pdf"}
              title={"Résumé"}
            />
          </span>

          <div className={styles.skills}>
            <span className={styles.skillsHeader}>
              <span className={styles.codeIcon}>
                <Code width={12} height={12} />
              </span>
              <p>Languages</p>
            </span>
            <span className={styles.langList}>
              {langs.map((lang) => (
                <span key={lang} className={styles.langItem}>
                  {lang}
                </span>
              ))}
            </span>
          </div>

          <div className={styles.blur} />
        </div>
        <div className={styles.scrollSection}>
          <BentoGrid />
          <Footer />
        </div>
      </div>
    </main>
  );
}
