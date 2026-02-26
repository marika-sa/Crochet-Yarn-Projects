'use client'
import styles from "./ProjectCard.module.css";
import IconButton from "../iconButton/IconButton";
import { useState } from "react";

export default function ProjectCard({ projectStatus, projectTitle, projectDate, projectLink }: { projectStatus: string, projectTitle: string, projectDate: string, projectLink?: string }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const getStatusColor = (status: string) => {
        switch (status) {
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
                    {/* <button className={styles.iconButton} onClick={() => setIsExpanded(!isExpanded)}>
                        <img src="/icons/show-more.png" alt="show more icon" width={30} />
                    </button> */}
                    <IconButton iconSrc="/icons/edit-icon.png" altText="edit icon" height={50} />
                    {/* <button className={styles.iconButton}>
                        <img src="/icons/edit-icon.png" alt="edit icon" width={50} />
                    </button> */}
                    <IconButton iconSrc="/icons/delete-icon.png" altText="delete icon" height={50} />
                    {/* <button className={styles.iconButton}>
                        <img src="/icons/delete-icon.png" alt="delete icon" width={50} />
                    </button> */}
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
        </div>
    )
}