import { SiArchlinux, SiDocker, SiGit, SiGithub, SiLaravel, SiLinux, SiMysql, SiNextdotjs, SiPostgresql, SiPostman, SiReact, SiSupabase, SiTailwindcss, SiVscodium } from "@icons-pack/react-simple-icons"

const SKILLS = [
    { name: "ReactJS", icon: SiReact },
    { name: "NextJS", icon: SiNextdotjs },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "Docker", icon: SiDocker },
    { name: "Laravel", icon: SiLaravel },
    { name: "MySQL", icon: SiMysql },
    { name: "Supabase", icon: SiSupabase },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "VSC", icon: SiVscodium },
    { name: "Linux", icon: SiLinux },
    { name: "Arch", icon: SiArchlinux },
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "Postman", icon: SiPostman },
] as const

const Skills = () => {
    return (
        <section className="flex flex-col gap-6 scroll-mt-20 md:scroll-mt-14" id="skills">
            <h2 className="text-2xl font-bold tracking-tight">My Skills and Tools</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-6 sm:gap-6 text-gray-400">
                {SKILLS.map(({ name, icon: Icon }) => (
                    <div
                        key={name}
                        className="flex flex-col items-center gap-2.5 rounded-lg py-2 text-center hover:text-white transition-colors"
                    >
                        <Icon size={34} />
                        <span className="text-sm">{name}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills