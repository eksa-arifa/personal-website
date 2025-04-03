import { SiArchlinux, SiDocker, SiGit, SiGithub, SiLaravel, SiLinux, SiMysql, SiNextdotjs, SiPostgresql, SiPostman, SiReact, SiSupabase, SiTailwindcss, SiVscodium } from "@icons-pack/react-simple-icons"
import { useEffect } from "react"
import { useScrollContext } from "../hooks/ScrollContext"

const Skills = () => {

    const {scrollTop, setScrollSection} = useScrollContext()

    useEffect(()=>{
        const skills = document.getElementById("skills")

        const top = skills?.getBoundingClientRect().top
        const bottom = skills?.getBoundingClientRect().bottom

        if(top as number <= 0 && bottom as number >= 0){
            setScrollSection("skills")
        }




    }, [scrollTop, setScrollSection])
    return (
        <div className="flex flex-col gap-4" id="skills">
            <h1 className="text-2xl font-bold">My Skills and Tools</h1>
            <div className="flex gap-20 py-8 justify-center flex-wrap text-gray-400">
                <span className="flex flex-col items-center gap-2">
                    <SiReact size={40} />
                    <p>ReactJS</p>
                </span>
                <span className="flex flex-col items-center gap-2">
                    <SiNextdotjs size={40} />
                    <p>NextJS</p>
                </span>
                <span className="flex flex-col items-center gap-2">
                    <SiTailwindcss size={40} />
                    <p>Tailwind</p>
                </span>
                <span className="flex flex-col items-center gap-2">
                    <SiDocker size={40} />
                    <p>Docker</p>
                </span>
                <span className="flex flex-col items-center gap-2">
                    <SiLaravel size={40} />
                    <p>Laravel</p>
                </span>
                <span className="flex flex-col items-center gap-2">
                    <SiMysql size={40} />
                    <p>MySQL</p>
                </span>
                <span className="flex flex-col items-center gap-2">
                    <SiSupabase size={40} />
                    <p>Supabase</p>
                </span>
                <span className="flex flex-col items-center gap-2">
                    <SiPostgresql size={40} />
                    <p>PostgreSQL</p>
                </span>
                <span className="flex flex-col items-center gap-2">
                    <SiVscodium size={40} />
                    <p>VSC</p>
                </span>
                <span className="flex flex-col items-center gap-2">
                    <SiLinux size={40} />
                    <p>Linux</p>
                </span>
                <span className="flex flex-col items-center gap-2">
                    <SiArchlinux size={40} />
                    <p>Arch</p>
                </span>
                <span className="flex flex-col items-center gap-2">
                    <SiGit size={40} />
                    <p>Git</p>
                </span>
                <span className="flex flex-col items-center gap-2">
                    <SiGithub size={40} />
                    <p>GitHub</p>
                </span>
                <span className="flex flex-col items-center gap-2">
                    <SiPostman size={40} />
                    <p>Postman</p>
                </span>
            </div>
        </div>
    )
}

export default Skills