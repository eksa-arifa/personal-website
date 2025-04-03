import { useEffect, useState } from "react"
import { useScrollContext } from "../hooks/ScrollContext"


interface Project {
    title: string
    description: string
    image: string
    url: string
    demo?: string
}


const Projects = () => {
    const [projects, setProjects] = useState<Project[]>([])
    const {scrollTop, setScrollSection} = useScrollContext()

    useEffect(() => {
        const fetchProjects = async () => {
            const res = await fetch("/assets/data/projects.json")
            const data = await res.json()

            setProjects(data.projects)
        }

        fetchProjects()
    }, [])

    
        useEffect(()=>{
            const projects = document.getElementById("projects")
    
            const top = projects?.getBoundingClientRect().top
            const bottom = projects?.getBoundingClientRect().bottom
    
            if(top as number <= 0 && bottom as number >= 0){
                setScrollSection("projects")
            }
    
    
    
    
        }, [scrollTop, setScrollSection])

    return (
        <div className="flex flex-col gap-4" id="projects">
            <h1 className="text-2xl font-bold">My Projects</h1>


            <div className="flex flex-col gap-4">
                {projects.map((project, index) => (

                    <div key={index} className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-bold text-white">{project.title}</h2>
                            <p className="text-gray-400 mt-2">{project.description}</p>
                            <div className="mt-4 flex gap-4">
                                {project.url && (
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded"
                                    >
                                        GitHub Repo
                                    </a>
                                )}
                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-green-500 text-white hover:bg-green-600 px-4 py-2 rounded"
                                    >
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center">
                <a href="https://github.com/eksa-arifa" target="_blank" className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 rounded">See More</a>
            </div>

        </div>
    )
}

export default Projects