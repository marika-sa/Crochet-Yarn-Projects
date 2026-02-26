'use client'
import Searchbar from "@/components/ui/searchbar/Searchbar"
import Dropdown from "@/components/ui/dropdown/Dropdown"
import IconButton from "@/components/ui/iconButton/IconButton"
import styles from "./Toolbar.module.css"

export default function Toolbar({ onClick }: { onClick: () => void }) {
    return (
        <div className={styles.container}>
            <IconButton
                iconSrc="/icons/plus-icon.png" altText="Add a project" height={60} onClick={onClick} />
        </div>
    )
}