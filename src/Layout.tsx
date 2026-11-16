import { PropsWithChildren } from "react"


const Layout = ({children}: PropsWithChildren) => {
  return (
    <div className="min-h-screen bg-slate-800 text-white">
      <div className="mx-auto flex max-w-6xl flex-col px-6 sm:px-8 md:flex-row md:gap-12 md:px-10 lg:gap-16">
        {children}
      </div>
    </div>
  )
}

export default Layout