import { SiGithub, SiInstagram } from '@icons-pack/react-simple-icons'
import ProfilePict from './assets/profile-picture.jpeg'
import { Linkedin, Mail } from 'lucide-react'
import { useScrollContext } from './hooks/ScrollContext'
import { useEffect, useState } from 'react'


const Header = () => {

    const { scrollSection } = useScrollContext()
    const [isFixed, setIsFixed] = useState(false)


    useEffect(() => {
        const handleScroll = () => {
            const header = document.getElementById("navigation")
            if (header) {
                const top = header.getBoundingClientRect().top
                if (top <= 0) {
                    setIsFixed(true)
                } else {
                    setIsFixed(false)
                }
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    return (
        <div className="md:w-2/5 w-full h-fit md:h-screen px-10 py-10 text-white flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <img src={ProfilePict} alt="pp" className='w-[150px] rounded-full' />
                <h1 className="lg:block hidden font-bold text-3xl text-nowrap">Muhammad Eksa Arifa</h1>
                <h1 className="font-bold block lg:hidden text-3xl text-nowrap">Muh. Eksa Arifa</h1>
                <p className="text-gray-400 text-xl lg:text-2xl">Software Engineer</p>
            </div>
            <div className="flex gap-4">
                <a href="https://instagram.com/eksrifaa" target="_blank" rel="noopener noreferrer">
                    <SiInstagram size={25} />
                </a>
                <a href="https://github.com/eksa-arifa" target="_blank" rel="noopener noreferrer">
                    <SiGithub size={25} />
                </a>
                <a href="https://www.linkedin.com/in/m-eksa-arifa-048757340" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={25} />
                </a>
                <a href="mailto:eksaarifa@gmail.com" target="_blank" rel="noopener noreferrer">
                    <Mail size={25} />
                </a>
            </div>
            <div id='navigation' className='h-10 md:h-fit'>
                <div className={`md:flex-col flex-row gap-4 flex justify-center md:justify-start py-4 md:py-0 w-full bg-slate-800 md:relative ${isFixed ? 'fixed' : 'relative'} z-50 top-0 left-0`}>
                    <div className="flex gap-1 items-center group w-fit">
                        <div className={`md:border ${(scrollSection == "about") ? 'md:w-10' : 'md:w-4'} md:group-hover:w-10 transition-all`}></div>
                        <a href='#about' className={`${(scrollSection == "about") ? 'text-blue-500 md:text-white' : 'text-white'}`}>About</a>
                    </div>
                    <div className="flex gap-1 items-center group w-fit">
                        <div className={`md:border ${(scrollSection == "skills") ? 'md:w-10' : 'md:w-4'} md:group-hover:w-10 transition-all`}></div>
                        <a href='#skills' className={`${(scrollSection == "skills") ? 'text-blue-500 md:text-white' : 'text-white'}`}>Skills</a>
                    </div>
                    <div className="flex gap-1 items-center group w-fit">
                        <div className={`md:border ${(scrollSection == "projects") ? 'md:w-10' : 'md:w-4'} md:group-hover:w-10 transition-all`}></div>
                        <a href='#projects' className={`${(scrollSection == "projects") ? 'text-blue-500 md:text-white' : 'text-white'}`}>Projects</a>
                    </div>
                    <div className="flex gap-1 items-center group w-fit">
                        <div className={`md:border ${(scrollSection == "sertificates") ? 'md:w-10' : 'md:w-4'} md:group-hover:w-10 transition-all`}></div>
                        <a href='#sertificates' className={`${(scrollSection == "sertificates") ? 'text-blue-500 md:text-white' : 'text-white'}`}>Achievement</a>
                    </div>
                </div>
            </div>
            <footer className='mt-auto hidden md:block'>
                <p className="text-gray-600 text-nowrap">© 2025 Muhammad Eksa Arifa</p>
            </footer>
        </div>
    )
}

export default Header