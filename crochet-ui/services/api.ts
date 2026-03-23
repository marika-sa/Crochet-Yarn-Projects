import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"
});

export interface Project {
    _id: string,
    title: string,
    status: string,
    dateStarted: string,
    link: string
};

export const getProjects = (search?: string, status?: string) =>
    api.get<Project[]>("/projects", { params: { search, status } });

export const getProject = (id: string) =>
    api.get<Project>(`/projects/${id}`);

export const createProject = (data: Partial<Project>) =>
    api.post<Project>('/projects', data);

export const updateProject = (id: string, data: Partial<Project>) =>
    api.put<Project>(`/projects/${id}`, data);

export const deleteProject = (id: string) =>
    api.delete<Project>(`/projects/${id}`);