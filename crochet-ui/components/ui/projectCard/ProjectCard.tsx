'use client'
import styles from "./ProjectCard.module.css";
import IconButton from "../iconButton/IconButton";
import TextButton from "../textButton/TextButton";
import { useState } from "react";
import { createPortal } from "react-dom";
import FormModal from "@/components/layouts/formModal/FormModal";

export default function ProjectCard({ projectStatus, projectTitle, projectDate, projectLink, onEdit, onDelete }: { projectStatus: string, projectTitle: string, projectDate: string, projectLink?: string, onEdit: () => void, onDelete: () => void }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [confirmOpen, setConfirmOpen] = useState(false);

    const getStatusColor = (status: string) => {
        switch (status.toLocaleLowerCase()) {
            case "ongoing":
                return "/icons/ongoing.png";
            case "completed":
                return "/icons/completed.png";
            case "on pause":
                return "/icons/on-pause.png";
            default:
                return "/icons/ongoing.png";
        }
    }

    return (
        <div className={styles.cardContainer}>
            <div className={styles.container}>
                <div className={styles.infoContainer}>
                    <img src={getStatusColor(projectStatus)} alt="Project status icon" width={70} />
                    <h3 className={styles.title}>{projectTitle}</h3>
                </div>
                <div className={styles.buttonsContainer}>
                    <IconButton iconSrc="/icons/show-more.png" altText="show more icon" height={30} onClick={() => setIsExpanded(!isExpanded)} />
                    <IconButton iconSrc="/icons/edit-icon.png" altText="edit icon" height={50} onClick={onEdit} />
                    <IconButton iconSrc="/icons/delete-icon.png" altText="delete icon" height={50} onClick={() => setConfirmOpen(true)} />
                </div>
            </div>
            {isExpanded && (
                <div className={styles.expandedBackground}>
                    <div className={styles.expandedContent}>
                        <p>Date Started: {projectDate}</p>
                        <a href={projectLink} target="_blank" rel="noopener noreferrer">Pattern Link</a>
                    </div>
                </div>
            )}
            {confirmOpen && createPortal(
                <FormModal
                    open={confirmOpen}
                    onCancel={() => setConfirmOpen(false)}
                >
                    <div className={styles.children}>
                        <p className={styles.childrenText}>Are you sure you want to delete this project?</p>
                        <div className={styles.childrenButtons}>
                            <TextButton text="Confirm" img="/icons/checkmark-icon.png" height={50} onClick={() => { onDelete(); setConfirmOpen(false); }} />
                            <TextButton text="Cancel" img="/icons/x-icon.png" height={50} onClick={() => setConfirmOpen(false)} />
                        </div>
                    </div>
                </FormModal>,
                document.body
            )}
        </div>
    )
}