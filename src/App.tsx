import { Plus, X } from 'lucide-react'
import './index.css'
import logo from './assets/in-orbit-logo.svg'
import start from './assets/lets-start.svg'
import { Button } from './components/ui/button'
import CreateGoal from './components/create-goal'
import { Dialog, DialogTrigger } from './components/ui/dialog'

function App() {
  return (
    <>
      <Dialog>
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
          <CreateGoal />
          <DialogTrigger asChild>
            <Button>
              <Plus className="size-4 mr-1.5" />
              Cadastrar Meta
            </Button>
          </DialogTrigger>
        </div>
      </Dialog>
    </>
  )
}

export default App
