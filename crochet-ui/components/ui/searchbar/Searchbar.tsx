import styles from "./Searchbar.module.css";

export default function Searchbar({ userSearch, setUserSearch }: { userSearch: string, setUserSearch: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
    return (
        <div className={styles.container}>
            <img className={styles.containerImage} src="/project-border.png" alt="container box hand-drawn" />
            <div className={styles.searchbar}>
                <input name="search" type="text" placeholder="Search projects..." className={styles.searchInput} value={userSearch} onChange={setUserSearch} />
                <div>
                    <img className={styles.searchIcon} src='/icons/search-icon.png' alt="Search projects icon" width={50} height={50} />
                </div>
            </div>
        </div>
    )
}