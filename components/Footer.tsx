import styles from "../css/components/footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p>
        Freestyled design and coded in Neovim by yours truly. Built with Next.js
        and CSS Modules, deployed using Vercel. All text is set in the Inter
        typeface.
      </p>
    </div>
  );
}
