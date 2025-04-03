import { useEffect } from "react"
import { useScrollContext } from "../hooks/ScrollContext"


const About = () => {

    const { scrollTop, setScrollSection } = useScrollContext()

    useEffect(() => {
        const about = document.getElementById("about")

        const top = about?.getBoundingClientRect().top
        const bottom = about?.getBoundingClientRect().bottom

        if (top as number <= 0 && bottom as number >= 0) {
            setScrollSection("about")
        }




    }, [scrollTop, setScrollSection])

    return (
        <div className="flex flex-col gap-4" id="about">
            <h1 className="text-2xl font-bold">About Me</h1>
            <p className="text-gray-400 text-justify">
                I am a fresh graduate from a vocational school in Yogyakarta. I specialize in full-stack development, with a stronger focus on back-end technologies. I am always eager to learn new technologies and improve my skills to build better and more efficient web applications.
                In addition to my technical skills, I am passionate about problem-solving and enjoy working on challenging projects that require creative solutions. I have experience working with various programming languages and frameworks, including JavaScript, TypeScript, React, Node.js, and more.
                In my free time, I enjoy participating in coding challenges and learning best practices to enhance my development skills. I make the most of my leisure time by exploring new technologies and staying updated with the latest trends in the software development industry. This continuous learning helps me grow as a developer and contributes to my ability to create innovative and efficient solutions.   </p>
        </div>
    )
}

export default About