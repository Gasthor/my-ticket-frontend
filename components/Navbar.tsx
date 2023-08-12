import { useBookStore } from "@/store/bookStore"
import { FC } from "react"

interface Props {
  
}

const Navbar : FC<Props> = ({
    
}) => {
    const stateSidebar = useBookStore(state => state.stateSidebar)
    const updateStateSidebar = useBookStore(state => state.updateStateSidebar)

    return (
        <nav className="px-2 py-4 sm:px-16 border-b-[1px] border-gray-700 flex flex-row justify-between min-h-[65px]">
            <h2 className="sm:text-center font-display text-xl font-bold sm:text-2xl">My ticket</h2>
            
            <div>
                <a onClick={() => updateStateSidebar(!stateSidebar)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </a>
            </div>
        </nav>
    )
}

export default Navbar