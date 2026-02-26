'use client'
import { useState } from "react";
import styles from "./Dropdown.module.css";

const OPTIONS = [
    { id: 0, label: "All projects" },
    { id: 1, label: "Ongoing" },
    { id: 2, label: "On pause" },
    { id: 3, label: "Completed" },
]

export default function Dropdown({ status, setStatus }: { status: string, setStatus: (status: string) => void }) {
    const [selectOpen, setSelectOpen] = useState(false);

    return (
        <div className={styles.container}>
            <img className={styles.containerImage} src="/wide-container.png" alt="container box hand-drawn" />
            <select name="status" className={styles.dropdown} value={status} onChange={(e) => { setStatus(e.target.value); console.log(e.target.value) }} onBlur={() => setSelectOpen(false)} onClick={() => setSelectOpen(!selectOpen)}>
                {OPTIONS.map((option) => (
                    <option className={styles.option} key={option.id} value={option.label}>
                        {option.label}
                    </option>
                ))}
            </select>
            <img className={`${styles.dropdownIcon} ${selectOpen ? styles.open : ''}`} src="/icons/dropdown-icon.png" alt="dropdown icon hand-drawn" width={30} height={30} />
        </div>
    )
}