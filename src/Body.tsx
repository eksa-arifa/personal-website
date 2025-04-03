import { useEffect } from "react"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import { useScrollContext } from "./hooks/ScrollContext"
import About from "./components/About"
import Certificates from "./components/Certificates"



const Body = () => {
  const { setScrollTop } = useScrollContext()

  useEffect(() => {
    const body = document.getElementById("body")

    body?.addEventListener("scroll", () => {
      const scrollTop = body.scrollTop
      setScrollTop(scrollTop)
    })

    window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY
      setScrollTop(scrollTop)
    })

  }, [setScrollTop])

  return (
    <div id="body" className="md:w-3/5 w-full px-10 md:px-0 md:pr-10 py-10 gap-16 flex flex-col text-white md:max-h-screen md:overflow-y-auto">
      <div className="flex flex-col gap-4" id="wellcome">
        <h1 className="lg:text-6xl font-bold text-4xl">Hi, my name is Muhammad Eksa Arifa</h1>
        <span className="text-2xl text-gray-400">Wellcome in my portfolio</span>
      </div>
      <About />
      <Skills />
      <Projects />
      <Certificates/>
      <footer className='mt-auto md:hidden'>
        <p className="text-gray-600 text-nowrap">© 2025 Muhammad Eksa Arifa</p>
      </footer>
    </div>
  )
}

export default Body