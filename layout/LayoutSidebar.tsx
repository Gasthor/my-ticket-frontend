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
        <div className="flex flex-col h-screen w-screen">
            <Navbar />
            <div className="flex flex-row">
                <div className=" max-w-[256px]">
                    <Sidebar/>
                </div>
                <div className="sm:ml-64 w-full p-4">
                    {children}
                </div>
            </div>


        </div>
    )
}

export default LayoutPrincipal