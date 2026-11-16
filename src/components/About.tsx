import { useLanguageContext } from "../hooks/LanguageContext"

const About = () => {
    const { copy } = useLanguageContext()

    return (
        <section className="flex flex-col gap-4 scroll-mt-20 md:scroll-mt-14" id="about">
            <h2 className="text-2xl font-bold tracking-tight">{copy.about.heading}</h2>
            <div className="space-y-3 text-gray-400 leading-relaxed text-justify">
                {copy.about.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
        </section>
    )
}

export default About