import { PropsWithChildren } from "react"


const Layout = ({children}: PropsWithChildren) => {
  return (
    <div className="flex min-h-screen bg-slate-800 md:flex-row flex-col">
        {children}
    </div>
  )
}

export default Layout