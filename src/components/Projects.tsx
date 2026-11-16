import { useEffect, useState } from "react"


interface Project {
    id?: number
    title: string
    description: string
    image: string
    url: string
    demo?: string
}


const Projects = () => {
    const [projects, setProjects] = useState<Project[]>([])

    useEffect(() => {
        const fetchProjects = async () => {
            const res = await fetch("/assets/data/projects.json")
            const data = await res.json()

            setProjects(data.projects)
        }

        fetchProjects()
    }, [])

    return (
        <section className="flex flex-col gap-6 scroll-mt-20 md:scroll-mt-14" id="projects">
            <h2 className="text-2xl font-bold tracking-tight">My Projects</h2>

            <div className="flex flex-col gap-6 md:gap-8">
                {projects.map((project, index) => (
                    <article
                        key={project.id ?? index}
                        className="bg-gray-800/80 border border-slate-700/50 rounded-xl shadow-md overflow-hidden"
                    >
                        <div className="aspect-video w-full overflow-hidden bg-slate-900">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-5 sm:p-6 flex flex-col gap-3">
                            <h3 className="text-xl font-bold text-white">{project.title}</h3>
                            <p className="text-gray-400 text-sm sm:text-base leading-relaxed text-justify">
                                {project.description}
                            </p>
                            {(project.url || project.demo) && (
                                <div className="pt-2 flex flex-wrap gap-3">
                                    {project.url && (
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-blue-500 text-white hover:bg-blue-600 px-4 py-2 text-sm font-medium rounded-lg transition-colors"
                                        >
                                            GitHub Repo
                                        </a>
                                    )}
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-green-500 text-white hover:bg-green-600 px-4 py-2 text-sm font-medium rounded-lg transition-colors"
                                        >
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                    </article>
                ))}
            </div>
            <div className="flex justify-center pt-2">
                <a
                    href="https://github.com/eksa-arifa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white hover:bg-blue-600 px-5 py-2.5 text-sm font-medium rounded-lg transition-colors"
                >
                    See More
                </a>
            </div>
        </section>
    )
}

export default Projects