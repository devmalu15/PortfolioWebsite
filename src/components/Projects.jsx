import React from 'react';
import './Projects.css';

// Dummy data - replace with your actual projects
const projectsData = [
    {
        title: 'FactoPedia',
        dates: 'Sep 2025',
        description: 'As the name suggests, FactoPedia is a website for knowledge gainers. Want to pass some time without wasting it? Visit FactoPedia!',
        tags: [
            { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'SpringBoot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
            { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
            { name: 'Vercel', icon: 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/vercel/vercel-original.svg' },
            { name: 'Railway', icon: 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/railway/railway-original.svg' },
            { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
            { name: 'IntelliJ', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg' },
            { name: 'Postman', icon: 'https://www.svgrepo.com/show/354202/postman-icon.svg' }
        ],
        link: 'https://factopedia-f.vercel.app/',
        github: 'https://github.com/devmalu15/factopedia-backend',
    },
    {
        title: 'ResumeChecker',
        dates: 'Aug 2025',
        description: 'Free resume grading website giving accurate ats level grading and suggestion for professional resumes based on Job Descriptions.',
        tags: [
            { name: 'SpringBoot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
            { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
            { name: 'Postman', icon: 'https://www.svgrepo.com/show/354202/postman-icon.svg' },
            { name: 'Vercel', icon: 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/vercel/vercel-original.svg' },
            { name: 'Railway', icon: 'https://raw.githubusercontent.com/devicons/devicon/develop/icons/railway/railway-original.svg' },
            { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
            { name: 'IntelliJ', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg' }

        ],
        link: 'https://gemini-app-f-wxh5.vercel.app/',
        github: 'https://github.com/devmalu15/GeminiAppB',
    },
    {
        title: 'CSAIC SQL Script',
        dates: 'June 2024',
        description: '"Customer Segmentation Analysis to Improve Conversion", is a script written in sql on postgresql dataset to improve customer conversion rate for a company.',
        tags: [
            { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
            { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg' },
            { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' }
        ],
        link: '#',
        github: 'https://github.com/devmalu15/csaic-jovac',
    },
];

const Projects = () => {
    return (
        <section id="projects">
            <h2 className="section-heading">Things I've Built</h2>
            <div className="projects-grid">
                {projectsData.map((project, index) => (
                    <div className="project-card" key={index}>
                        <div className="project-inner">
                            <header>
                                <div className="project-header">
                                    <h3 className="project-title">{project.title}</h3>
                                    <div className="project-links">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Link">
                                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                        </a>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="External Link">
                                            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                        </a>
                                    </div>
                                </div>
                                <p className="project-dates">{project.dates}</p>
                                <p className="project-description">{project.description}</p>
                            </header>
                            <footer>
                                <ul className="project-tags">
                                    {project.tags.map((tag, i) => (
                                        <li key={i} className="project-tag-card">
                                            <img src={tag.icon} alt={tag.name} />
                                            <span>{tag.name}</span>
                                        </li>
                                    ))}
                                </ul>
                            </footer>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;