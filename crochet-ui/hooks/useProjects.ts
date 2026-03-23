import { useState, useEffect } from "react";
import { getProjects, createProject, updateProject, deleteProject, Project } from "@/services/api";

export const useProjects = (search?: string, status?: string) => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchProjects = async () => {
        setLoading(true)
        try {
            const res = await getProjects(search, status);
            setProjects(res.data);
        } catch (err) {
            setError("failed to fetch projects");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, [search, status]);

    const addProject = async (data: Partial<Project>) => {
        await createProject(data);
        fetchProjects();
    };

    const editProject = async (id: string, data: Partial<Project>) => {
        await updateProject(id, data);
        fetchProjects();
    };

    const removeProject = async (id: string) => {
        await deleteProject(id);
        fetchProjects();
    };

    return { projects, loading, error, addProject, editProject, removeProject };
};