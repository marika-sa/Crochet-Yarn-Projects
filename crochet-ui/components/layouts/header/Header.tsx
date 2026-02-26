import styles from "./Header.module.css";

export default function Header() {
    return (
        <div className={styles.container}>
            <img src="/decorated-logo.png" alt="Hand-drawn logo for Hook Loop with a decorative simple stitch underline" height={250} />
        </div>
    )
}