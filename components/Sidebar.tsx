import { useBookStore } from "@/store/bookStore";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { FC } from "react";
import Button from "./Button";

interface Props {
}
const Sidebar: FC<Props> = ({

}) => {

    const { data: session, status } = useSession()

    const stateSidebar = useBookStore(state => state.stateSidebar)

    console.log(stateSidebar)

    return (
        <aside className={`fixed top-[65px] sm:absolute bottom-0 flex bg-slate-50 dark:bg-slate-800 p-2 flex-col gap-4 justify-between border-r-[1px] border-r-gray-600 z-50 transition-all duration-300 ease-out w-[256px] min-w-[256px] sm:translate-x-0 ${stateSidebar ? "translate-x-[-256px] " : "translate-x-0"}`}>
            <h1 className="text-center font-display text-xl font-extrabold sm:text-3xl">Mi area</h1>
            <div className="flex flex-col gap-4">
                <div className="text-center font-semibold hover:translate-x-2 transition-all duration-150 hover:text-gray-300 ease-in-out">
                    <Link href={"/events"}>Gestion de eventos</Link>
                </div>
                <div className="text-center font-semibold hover:translate-x-2 transition-all duration-150 hover:text-gray-300 ease-in-out">
                    <Link href={"/history"} >Historial de eventos</Link>
                </div>
                <a className="text-center font-semibold hover:translate-x-2 transition-all duration-150 hover:text-gray-300 ease-in-out">Mi personal</a>
                <a className="text-center font-semibold hover:translate-x-2 transition-all duration-150 hover:text-gray-300 ease-in-out">Mi pago</a>

            </div>
            <div className="flex flex-col gap-4 border-t-[1px] border-t-gray-600 max-w-[240px] mb-2">
                <div className="mt-2 flex flex-row gap-3 mx-auto">
                    <img className=" w-16 rounded-3xl h-fit" src={session?.user?.image || undefined} />
                    <div className="flex flex-col max-w-[240px]">
                        <h2 className=" w-40 truncate font-display text-base font-bold sm:text-lg">{session?.user?.name}</h2>
                        <h3 className="w-40 truncate font-display text-xs font-semibold sm:text-sm">{session?.user?.email}</h3>
                    </div>
                </div>
                <div className="mx-auto flex flex-row justify-between gap-1">
                    <Button color="bg-red-600" action={() => signOut({ "redirect": true, "callbackUrl": "/" })}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                        </svg>

                    </Button>
                    <Button color="bg-blue-600" >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </Button>
                    <Button color="bg-blue-600">
                        <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            stroke="currentColor" className="w-6 h-6"
                        >
                            <path d="M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1a1 1 0 001-1v-5.143a1 1 0 00-1-1h-.908C4.648 6.987 7.978 4 12 4s7.352 2.987 7.908 6.857H19a1 1 0 00-1 1V18c0 1.103-.897 2-2 2h-2v-1h-4v3h6c2.206 0 4-1.794 4-4 1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10z" />
                        </svg>
                    </Button>
                </div>
            </div>



        </aside>
    )
}

export default Sidebar