import styles from "./IconButton.module.css";

export default function IconButton({ iconSrc, altText, height, onClick }: { iconSrc: string; altText: string; height?: number; onClick?: () => void }) {
    return (
        <button className={styles.iconButton} onClick={onClick}>
            <img src={iconSrc} alt={altText} height={height || 50} />
        </button >
    );
}