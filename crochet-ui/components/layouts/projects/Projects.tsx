import ProjectCard from "@/components/ui/projectCard/ProjectCard"
import styles from "./Projects.module.css";
import { Project } from "@/services/api";


export default function Projects({ projects, onEdit, onDelete }: { projects: Project[], onEdit: (project: Project) => void, onDelete: (id: string) => void }) {
    return (
        <div className={styles.projectsContainer}>
            {projects.map(project => (
                <ProjectCard key={project._id} projectStatus={project.status} projectTitle={project.title} projectDate={project.dateStarted} projectLink={project.link} onEdit={() => onEdit(project)} onDelete={() => onDelete(project._id)} />
            ))}
        </div>
    )
}