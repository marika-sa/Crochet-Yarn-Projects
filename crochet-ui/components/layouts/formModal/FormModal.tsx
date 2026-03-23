import React, { useState } from 'react';
import styles from './FormModal.module.css'
import TextButton from "@/components/ui/textButton/TextButton"
import Dropdown from '@/components/ui/dropdown/Dropdown'
import { Project } from '@/services/api';

export default function FormModal({ open, onCancel, onSave, project, children }: { open: boolean, onCancel: () => void, onSave?: (data: Partial<Project>) => void, project?: Project, children?: React.ReactNode }) {
    if (!open) return null;

    const [projectName, setProjectName] = useState(project?.title || "");
    const [patternLink, setPatternLink] = useState(project?.link || "");
    const [statusSelected, setStatusSelected] = useState(project?.status || "");

    const handleSave = () => {
        if (!projectName) return;
        onSave?.({
            title: projectName,
            link: patternLink,
            status: statusSelected,
            dateStarted: new Date().toISOString().split('T')[0]
        })
    }

    return (
        <>
            <div className={styles.overlay} /><div className={styles.container}>
                <div className={styles.background}>
                    <div className={styles.elements}>
                        {children ? children : (
                            <>
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
                                        <Dropdown status={statusSelected} setStatus={setStatusSelected} includeAll={false} />
                                    </div>
                                </form>
                                <div className={styles.buttons}>
                                    <TextButton text="Save" img="/icons/checkmark-icon.png" height={50} onClick={handleSave} />
                                    <TextButton text="Cancel" img="/icons/x-icon.png" height={50} onClick={onCancel} />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}