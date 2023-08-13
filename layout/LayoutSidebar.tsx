import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { FC } from "react";

interface Props {
    children: React.ReactNode | React.ReactNode[]
}

const LayoutPrincipal: FC<Props> = ({
    children
}) => {

    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <div className="flex flex-row h-full w-screen">
                <Sidebar />
                <main className="ml-0 sm:ml-64 w-full p-4 sm:px-10">
                    {children}
                </main>
            </div>

        </div>
    )
}

export default LayoutPrincipal