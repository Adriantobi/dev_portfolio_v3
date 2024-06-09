import styles from "../css/components/jobbento.module.css";

import Image from "next/image";
import GridItem from "./GridItem";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type JobBentoProps = {
  link: string;
  company: string;
  desc: string;
  role: string;
  type: string;
  icon: string;
  start: string;
  end: string;
  tech: string[];
};

export default function JobBento({
  link,
  company,
  desc,
  role,
  type,
  icon,
  start,
  end,
  tech,
}: JobBentoProps) {
  return (
    <GridItem size="3x3" type={"job"}>
      <div className={styles.content}>
        <Link href={link} target="_blank">
          <div className={styles.header}>
            {icon ? (
              <div className={styles.iconWrapper}>
                <Image
                  src={icon}
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt={`${company} logo`}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            ) : null}

            <div className={styles.textWrapper}>
              <div className={styles.jobLink}>
                <div className={styles.innerWrapper}>
                  <span>
                    {role} · {company} <ArrowRight width={18} height={18} />
                  </span>
                  <span>
                    {type} · {company} <ArrowRight width={18} height={18} />
                  </span>
                </div>
              </div>
              <span className={styles.timeLine}>
                {start} — {end}
              </span>
            </div>
          </div>
          <div className={styles.description}>
            <p>{desc}</p>
          </div>
          <div className={styles.technologies}>
            {tech.map((tech) => (
              <span key={tech} className={styles.tech}>
                {tech}
              </span>
            ))}
          </div>
        </Link>
      </div>
    </GridItem>
  );
}
