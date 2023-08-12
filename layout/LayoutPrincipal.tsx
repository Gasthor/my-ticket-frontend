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
            <div className="flex flex-row h-full">
                <Sidebar />
                <main className="flex flex-row h-full">
                    {children}
                </main>
            </div>

        </div>
    )
}

export default LayoutPrincipal