'use client'
import { useState, useEffect, use } from 'react';
import { createPortal } from 'react-dom';
import Header from "@/components/layouts/header/Header";
import Projects from "@/components/layouts/projects/Projects";
import FormModal from "@/components/layouts/formModal/FormModal";
import "./globals.css";
import IconButton from '@/components/ui/iconButton/IconButton';
import Searchbar from '@/components/ui/searchbar/Searchbar';
import Dropdown from '@/components/ui/dropdown/Dropdown';
import { useProjects } from '@/hooks/useProjects';
import { Project } from '@/services/api';


export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [statusSelected, setStatusSelected] = useState("");
  const [userInput, setUserInput] = useState("");
  const [projectToEdit, setProjectToEdit] = useState<Project | null>(null);

  const { projects, loading, error, addProject, editProject, removeProject } = useProjects();

  const filteredProjects = () => {
    let filtered = projects;
    if (statusSelected !== "") {
      filtered = filtered.filter(project => project.status === statusSelected);
    }
    if (userInput !== '') {
      filtered = filtered.filter(project => project.title.toLowerCase().includes(userInput.toLowerCase()));
    }
    return filtered;
  }

  const handleOnSave = async (data: Partial<Project>) => {
    if (projectToEdit) {
      await editProject(projectToEdit._id, data);
    } else {
      await addProject(data);
    }
    setIsFormOpen(false);
    setProjectToEdit(null);
  };

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return (
    <main className='container'>
      <div>
        <Header />
        <div className="toolbar">
          <Dropdown status={statusSelected} setStatus={(value) => setStatusSelected(value === "All projects" ? "" : value)} includeAll={true} />
          <Searchbar userSearch={userInput} setUserSearch={(e) => setUserInput(e.target.value)} />
          <IconButton
            iconSrc="/icons/plus-icon.png" altText="Add a project" height={60} onClick={() => { setProjectToEdit(null), setIsFormOpen(true) }} />
        </div>
        <Projects projects={filteredProjects()} onEdit={(project) => { setProjectToEdit(project); setIsFormOpen(true); }} onDelete={removeProject} />
        {isFormOpen && createPortal(<FormModal open={isFormOpen} onCancel={() => { setProjectToEdit(null); setIsFormOpen(false); }} onSave={handleOnSave} project={projectToEdit || undefined} />, document.body)}
      </div>
    </main>
  );
}
