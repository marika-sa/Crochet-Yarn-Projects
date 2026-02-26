import styles from './TextButton.module.css'

export default function TextButton({ text, img, height, onClick }: { text: string, img: string, height: number, onClick: () => void }) {
    return (
        <div className={styles.textButtonContainer}>
            <button className={styles.textButton} onClick={onClick}>
                <span>{text}</span>
                <img src={img} alt="button icon" height={height} />
            </button>
        </div>
    )
}