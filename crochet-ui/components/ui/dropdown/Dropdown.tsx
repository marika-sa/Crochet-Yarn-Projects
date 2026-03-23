'use client'
import { useState } from "react";
import styles from "./Dropdown.module.css";

const OPTIONS = [
    { id: 0, label: "All projects", value: "" },
    { id: 1, label: "Ongoing", value: "Ongoing" },
    { id: 2, label: "On pause", value: "On pause" },
    { id: 3, label: "Completed", value: "Completed" },
]

export default function Dropdown({ status, setStatus, includeAll = true }: { status: string, setStatus: (status: string) => void, includeAll: boolean }) {
    const [selectOpen, setSelectOpen] = useState(false);

    const options = includeAll ? OPTIONS : OPTIONS.filter(o => o.label !== "All projects");

    return (
        <div className={styles.container}>
            <img className={styles.containerImage} src="/wide-container.png" alt="container box hand-drawn" />
            <select name="status" className={styles.dropdown} value={status} onChange={(e) => { setStatus(e.target.value); console.log(e.target.value) }} onBlur={() => setSelectOpen(false)} onClick={() => setSelectOpen(!selectOpen)}>
                {options.map((option) => (
                    <option className={styles.option} key={option.id} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <img className={`${styles.dropdownIcon} ${selectOpen ? styles.open : ''}`} src="/icons/dropdown-icon.png" alt="dropdown icon hand-drawn" width={30} height={30} />
        </div>
    )
}