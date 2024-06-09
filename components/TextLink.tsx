import Link from "next/link";
import styles from "../css/components/textlink.module.css";
import { ArrowRight } from "lucide-react";

type TextLinkProps = {
  href?: string;
  title: string;
  target?: string;
  toDo?: () => void;
};

export default function TextLink({ href, title, target, toDo }: TextLinkProps) {
  if (href) {
    return (
      <Link href={href} target={target} className={styles.textLinkWrapper}>
        <div className={styles.TextLink}>
          <div className={styles.innerWrapper}>
            <span>
              {title} <ArrowRight width={18} height={18} />
            </span>
            <span>
              {title} <ArrowRight width={18} height={18} />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div className={styles.TextLink} onClick={() => (toDo ? toDo() : "")}>
      <div className={styles.innerWrapper}>
        <span>
          {title} <ArrowRight width={18} height={18} />
        </span>
        <span>
          {title} <ArrowRight width={18} height={18} />
        </span>
      </div>
    </div>
  );
}
