import Button from "@/components/Button";
import LayoutSidebar from "@/layout/LayoutSidebar";
import { useRouter } from "next/router";

export default function Home() {

  const route = useRouter()

  return (
    <LayoutSidebar>
        <div className="flex flex-col">
          <div className="flex flex-row justify-between">
          <h2 className='text-center font-display text-lg font-bold'>GESTION DE EVENTOS</h2>
            <Button color="bg-blue-600" action={() => route.push("/events/create")}>Crear evento</Button>
          </div>
            
            <h3>Pronto pagina para crear y administrar eventos</h3>
          </div>
        
    </LayoutSidebar>

  )


}