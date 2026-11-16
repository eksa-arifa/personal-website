import { useEffect } from "react"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import { useScrollContext } from "./hooks/ScrollContext"
import { useLanguageContext } from "./hooks/LanguageContext"
import About from "./components/About"



const SECTION_IDS = ["about", "skills", "projects"] as const
const ACTIVATION_OFFSET = 140

const Body = () => {
  const { setScrollSection } = useScrollContext()
  const { copy } = useLanguageContext()

  useEffect(() => {
    const updateActiveSection = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4

      if (nearBottom) {
        setScrollSection(SECTION_IDS[SECTION_IDS.length - 1])
        return
      }

      let current: string = SECTION_IDS[0]
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= ACTIVATION_OFFSET) {
          current = id
        }
      }
      setScrollSection(current)
    }

    updateActiveSection()
    window.addEventListener("scroll", updateActiveSection, { passive: true })
    window.addEventListener("resize", updateActiveSection, { passive: true })

    return () => {
      window.removeEventListener("scroll", updateActiveSection)
      window.removeEventListener("resize", updateActiveSection)
    }
  }, [setScrollSection])

  return (
    <main id="body" className="flex-1 min-w-0 flex flex-col gap-14 sm:gap-16 lg:gap-20 pt-4 pb-10 md:py-14 lg:py-16 text-white">
      <div className="flex flex-col gap-3" id="wellcome">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
          {copy.hero.greeting}
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 leading-relaxed text-justify">
          {copy.hero.subtitle}
        </p>
      </div>
      <About />
      <Skills />
      <Projects />
      <footer className="pt-6 border-t border-slate-700/60 md:hidden">
        <p className="text-slate-400 text-sm">© 2025 Muhammad Eksa Arifa</p>
      </footer>
    </main>
  )
}

export default Body