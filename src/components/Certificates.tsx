import { useEffect, useState } from "react"
import { useScrollContext } from "../hooks/ScrollContext"


interface Sertificate {
    id: string;
    title: string
    description: string
    image: string
}


const Certificates = () => {

    const { scrollTop, setScrollSection } = useScrollContext()
    const [sertificates, setSertificates] = useState<Sertificate[]>()

    useEffect(() => {
        const fetchProjects = async () => {
            const res = await fetch("/assets/data/sertificates.json")
            const data = await res.json()

            setSertificates(data.sertificates)
        }

        fetchProjects()
    }, [])

    useEffect(() => {
        const sertificates = document.getElementById("sertificates")

        const top = sertificates?.getBoundingClientRect().top
        const bottom = sertificates?.getBoundingClientRect().bottom

        if (top as number <= 0 && bottom as number >= 0) {
            setScrollSection("sertificates")
        }




    }, [scrollTop, setScrollSection])

    return (
        <div className="flex flex-col gap-4" id="sertificates">
            <h1 className="text-2xl font-bold">My Achievement</h1>

            <div className="flex flex-col gap-4">
                {sertificates?.map((sertificate) => (
                    <div key={sertificate.id} className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
                        <div className="w-full h-64 overflow-hidden">
                            <a href={sertificate.image} target="_blank">
                                <img
                                    src={sertificate.image}
                                    alt="project.title"
                                    className="w-full h-full object-cover hover:scale-125 transition-all"
                                />
                            </a>
                        </div>
                        <div className="p-4">
                            <h2 className="text-xl font-bold text-white">{sertificate.title}</h2>
                            <p className="text-gray-400">{sertificate.description}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Certificates