'use client'
import { useState } from 'react';
import { createPortal } from 'react-dom';
import Header from "@/components/layouts/header/Header";
import Projects from "@/components/layouts/projects/Projects";
import FormModal from "@/components/layouts/formModal/FormModal";
import "./globals.css";
import IconButton from '@/components/ui/iconButton/IconButton';
import Searchbar from '@/components/ui/searchbar/Searchbar';
import Dropdown from '@/components/ui/dropdown/Dropdown';
import { PROJECTS } from '@/data/projects';

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [statusSelected, setStatusSelected] = useState('All projects');
  const [userInput, setUserInput] = useState('');

  const filteredProjects = () => {
    let projects = PROJECTS;
    if (statusSelected !== 'All projects') {
      projects = projects.filter(project => project.status === statusSelected);
    }
    if (userInput !== '') {
      projects = projects.filter(project => project.title.toLowerCase().includes(userInput.toLowerCase()));
    }
    return projects;
  }

  return (
    <main className='container'>
      <div>
        <Header />
        <div className="toolbar">
          <Dropdown status={statusSelected} setStatus={setStatusSelected} />
          <Searchbar userSearch={userInput} setUserSearch={(e) => setUserInput(e.target.value)} />
          <IconButton
            iconSrc="/icons/plus-icon.png" altText="Add a project" height={60} onClick={() => setIsFormOpen(true)} />
        </div>
        <Projects projects={filteredProjects()} />
        {isFormOpen && createPortal(<FormModal open={isFormOpen} onCancel={() => setIsFormOpen(false)} onSave={() => setIsFormOpen(false)} />, document.body)}
      </div>
    </main>
  );
}
