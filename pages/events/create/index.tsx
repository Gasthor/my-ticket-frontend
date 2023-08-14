import Button from "@/components/Button";
import Input from "@/components/Input";
import LayoutSidebar from "@/layout/LayoutSidebar";
import { useState } from "react";

export default function Home() {

    const [nameEvent, setNameEvent] = useState("")
    const [date, setDate] = useState("")
    const [ubication, setUbication] = useState("")
    const [capacity, setCapacity] = useState("")


    return (
        <LayoutSidebar>
            <div className="flex flex-col">
                <h2 className='text-center font-display text-lg font-bold'>CREAR EVENTO</h2>
                <form className="flex flex-col mb-4">
                    <Input title="Nombre del evento" value={nameEvent} change={setNameEvent} />
                    <Input title="Fecha del evento" value={date} change={setDate} />
                    <Input title="Ubicacion" value={ubication} change={setUbication} />
                    <Input title="Capacidad maxima de personas" value={capacity} change={setCapacity} />

                </form>

                <Button color="bg-blue-600 ">
                    Crear
                </Button>

            </div>

        </LayoutSidebar>

    )


}