import Sidebar from "@/components/Sidebar";
import LayoutPrincipal from "@/layout/LayoutPrincipal";

export default function Home() {


  return (
    <LayoutPrincipal>
        <div className="flex flex-col gap-7 p-2 min-h-full z-0 ">
          <div>
            <h2 className='font-display text-lg font-bold'>Caracteristicas</h2>
            <h3>Caracteristica 1...n</h3>
          </div>
        </div>
    </LayoutPrincipal>

  )


}