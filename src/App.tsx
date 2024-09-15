import { Plus } from 'lucide-react'
import './index.css'
import logo from './assets/in-orbit-logo.svg'
import start from './assets/lets-start.svg'

function App() {
  return (
    <>
      <div className=" bg-zinc-800 flex flex-col h-screen items-center justify-center gap-8">
        <img src={logo} width="115" height="16" alt="logo" />
        <img
          src={start}
          className="bg-zinc-900"
          width="320"
          height="320"
          alt="lstartogo"
        />
        <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
          Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora
          mesmo?
        </p>

        <button
          className="flex  flex-row 
        items-center justify-center
        bg-violet-500
        rounded
        text-md
        text-white
        p-2
         w-48"
          type="button"
        >
          <Plus className="size-4 mr-1.5" />
          Cadastrar Meta
        </button>
      </div>
    </>
  )
}

export default App
