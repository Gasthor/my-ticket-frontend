import Button from "@/components/Button";
import LayoutPrincipal from "@/layout/LayoutPrincipal";
import { signIn } from "next-auth/react"

export default function Home() {
  return (
    <LayoutPrincipal>
      <main className="flex flex-col gap-7 p-2">
        <h1 className="text-center font-display text-3xl font-extrabold sm:text-5xl">La nueva forma de crear tickets para eventos de manera sencilla y segura.</h1>
        <div className="mx-auto flex flex-col gap-2">
          <Button color="bg-blue-600" action={() => signIn("google", { "redirect": true, "callbackUrl": "/home" })}>Crear cuenta</Button>
          <h4 className="text-center font-display text-sm sm:text-sm">Solo con Google actualmente</h4>
        </div>
        <div>
          <h2 className='font-display text-lg font-bold'>Caracteristicas</h2>
          <h3>Caracteristica 1...n</h3>
        </div>
      </main>
    </LayoutPrincipal>
  )
}
