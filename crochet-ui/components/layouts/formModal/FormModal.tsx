import { useState } from 'react';
import styles from './FormModal.module.css'
import TextButton from "@/components/ui/textButton/TextButton"
import Dropdown from '@/components/ui/dropdown/Dropdown'

export default function FormModal({ open, onCancel, onSave }: { open: boolean, onCancel: () => void, onSave: () => void }) {
    if (!open) return null;
    const [projectName, setProjectName] = useState('');
    const [patternLink, setPatternLink] = useState('');
    const [projectStatus, setProjectStatus] = useState('');
    const [statusSelected, setStatusSelected] = useState('');

    return (
        <>
            <div className={styles.overlay} />
            <div className={styles.container}>
                <div className={styles.background}>
                    <div className={styles.elements}>
                        <form className={styles.form}>
                            <div className={styles.formGroup}>
                                <label htmlFor="project-name">Project Name</label>
                                <div className={styles.inputContainer}>
                                    <input type="text" id="project-name" name="project-name" value={projectName} onChange={(e) => setProjectName(e.target.value)} />
                                </div>
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="pattern-link">Pattern Link</label>
                                <div className={styles.inputContainer}>
                                    <input type="text" id="pattern-link" name="pattern-link" value={patternLink} onChange={(e) => setPatternLink(e.target.value)} />
                                </div>
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="project-status">Project Status</label>
                                <Dropdown status={statusSelected} setStatus={setStatusSelected} />
                            </div>
                        </form>
                        <div className={styles.buttons}>
                            <TextButton text="Save" img="/icons/checkmark-icon.png" height={50} onClick={onSave} />
                            <TextButton text="Cancel" img="/icons/x-icon.png" height={50} onClick={onCancel} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}