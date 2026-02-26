import ProjectCard from "@/components/ui/projectCard/ProjectCard"
import styles from "./Projects.module.css";
import { PROJECTS } from "@/data/projects";


export default function Projects({ projects }: { projects: typeof PROJECTS }) {
    return (
        <div className={styles.projectsContainer}>
            {projects.map(project => (
                <ProjectCard key={project.id} projectStatus={project.status} projectTitle={project.title} projectDate={project.dateStarted} projectLink={project.link} />
            ))}
        </div>
    )
}