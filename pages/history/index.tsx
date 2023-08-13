import LayoutSidebar from "@/layout/LayoutSidebar";

export default function Home() {


  return (
    <LayoutSidebar>
        <div className="flex flex-col gap-7 p-4 z-0 ">
          <div>
            <h2 className='text-center font-display text-lg font-bold'>HISTORIAL DE EVENTOS</h2>
            <h3>Pronto pagina para visualizar los eventos ya realizados y obtener informacion relevande de estos</h3>
          </div>
        </div>
    </LayoutSidebar>

  )


}