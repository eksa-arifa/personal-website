import { SiGithub, SiInstagram } from '@icons-pack/react-simple-icons'
import ProfilePict from './assets/profile-picture.jpeg'
import { Linkedin, Mail } from 'lucide-react'
import { useScrollContext } from './hooks/ScrollContext'
import { useLanguageContext } from './hooks/LanguageContext'
import { useEffect, useState } from 'react'
import { Language } from './i18n/profileCopy'

const SOCIAL_LINKS = [
    {
        href: 'https://instagram.com/eksrifaa',
        label: 'Instagram',
        icon: SiInstagram,
    },
    {
        href: 'https://github.com/eksa-arifa',
        label: 'GitHub',
        icon: SiGithub,
    },
    {
        href: 'https://www.linkedin.com/in/m-eksa-arifa-048757340',
        label: 'LinkedIn',
        icon: Linkedin,
    },
    {
        href: 'mailto:eksaarifa@gmail.com',
        label: 'Email',
        icon: Mail,
    },
] as const

const NAV_ITEMS = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
] as const

const LANGUAGES: ReadonlyArray<{ code: Language; label: string }> = [
    { code: 'en', label: 'EN' },
    { code: 'id', label: 'ID' },
]

const Header = () => {

    const { scrollSection } = useScrollContext()
    const { language, setLanguage, copy } = useLanguageContext()
    const [isFixed, setIsFixed] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const nav = document.getElementById("navigation")
            if (nav) {
                setIsFixed(nav.getBoundingClientRect().top <= 0)
            }
        }

        handleScroll()
        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header className="w-full md:w-[260px] lg:w-[320px] xl:w-[350px] md:shrink-0 h-fit md:sticky md:top-0 md:h-screen md:overflow-y-auto pt-8 pb-4 md:py-14 lg:py-16 text-white flex flex-col gap-6">
            <div className="flex flex-col gap-3">
                <img
                    src={ProfilePict}
                    alt="Muhammad Eksa Arifa"
                    className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full aspect-square object-cover"
                />
                <div className="flex flex-col gap-1">
                    <h1 className="hidden lg:block font-bold lg:text-[1.65rem] xl:text-[1.85rem] leading-tight">
                        Muhammad Eksa Arifa
                    </h1>
                    <h1 className="block lg:hidden font-bold text-2xl sm:text-3xl leading-tight">
                        Muh. Eksa Arifa
                    </h1>
                    <p className="text-gray-400 text-base lg:text-lg leading-snug">{copy.header.role}</p>
                </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-5">
                    {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="text-slate-300 hover:text-white transition-colors"
                        >
                            <Icon size={22} />
                        </a>
                    ))}
                </div>
                <div
                    role="group"
                    aria-label="Language switcher"
                    className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-900/60 p-0.5 text-xs font-medium"
                >
                    {LANGUAGES.map(({ code, label }) => {
                        const active = language === code
                        return (
                            <button
                                key={code}
                                type="button"
                                onClick={() => setLanguage(code)}
                                aria-pressed={active}
                                className={`cursor-pointer rounded-md px-2.5 py-1 transition-colors ${
                                    active
                                        ? 'bg-blue-500 text-white'
                                        : 'text-slate-400 hover:text-white'
                                }`}
                            >
                                {label}
                            </button>
                        )
                    })}
                </div>
            </div>

            <nav id='navigation' className='h-14 md:h-fit md:mt-2'>
                <div
                    className={`flex flex-row md:flex-col justify-center md:justify-start items-center md:items-start gap-6 md:gap-3 py-4 md:py-0 md:px-0 w-full md:w-auto md:relative md:bg-transparent md:backdrop-blur-none md:border-none ${
                        isFixed
                            ? 'fixed top-0 left-0 z-50 bg-slate-800/95 backdrop-blur-sm border-b border-slate-700/60 px-6'
                            : 'relative bg-slate-800'
                    }`}
                >
                    {NAV_ITEMS.map(({ id, label }) => {
                        const isActive = scrollSection === id
                        return (
                            <a
                                key={id}
                                href={`#${id}`}
                                className="flex items-center gap-2.5 group w-fit"
                            >
                                <span
                                    className={`hidden md:block border-t transition-all ${
                                        isActive
                                            ? 'w-10 border-white'
                                            : 'w-4 border-slate-500 group-hover:w-10 group-hover:border-white'
                                    }`}
                                />
                                <span
                                    className={`text-sm sm:text-base transition-colors ${
                                        isActive
                                            ? 'text-blue-400 font-medium md:text-white'
                                            : 'text-slate-400 group-hover:text-white'
                                    }`}
                                >
                                    {label}
                                </span>
                            </a>
                        )
                    })}
                </div>
            </nav>

            <footer className='mt-auto hidden md:block pt-4'>
                <p className="text-slate-400 text-sm">© 2025 Muhammad Eksa Arifa</p>
            </footer>
        </header>
    )
}

export default Header