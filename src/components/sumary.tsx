import { CheckCircle, Plus } from 'lucide-react'
import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'
import CreateGoal from './create-goal'
import InOrbitIconSVG from './in-orbit-icon'
import { Progress, ProgressIndicator } from './ui/progress-bar'
import { Separator } from './ui/separator'
import { OutlineButton } from './ui/outline-button'

function Sumary() {
  return (
    <div
      className=" bg-zinc-900 
      flex 
        justify-center 
        items-center     
    h-screen 
    w-full"
    >
      <div
        className=" bg-zinc-800 
        gap-6 text-white py-10
       flex flex-col
    h-[800px] 
    w-[480px]
    -mt-10
    px-5"
      >
        <CreateGoal />

        <div
          className="flex flex-row h-20 w-full 
        items-center
        justify-between"
        >
          <div className="flex items-center gap-3">
            <InOrbitIconSVG />
            <span className="text-lg font-semibold ">5 a 10 de agosto</span>
          </div>
          <div className="flex items-center justify-between">
            <DialogTrigger asChild>
              <Button size="sm">
                <Plus className="size-4 mr-1.5" />
                Cadastrar Meta
              </Button>
            </DialogTrigger>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Progress value={8} max={15}>
            <ProgressIndicator style={{ width: '200px' }} />
          </Progress>

          <div className="flex items-center justify-between text-xs text-zinc-400">
            <span>
              Você completou
              <span className="text-zinc-100 ml-1">5</span> das
              <span className="text-zinc-100 ml-1 mr-1">8</span>
              metas da semana
            </span>
            <span>60%</span>
          </div>
          <Separator />
          <div className="flex flex-wrap gap-3">
            <OutlineButton>
              <Plus className="size-4 text-zinc-600" />
              Meditar
            </OutlineButton>

            <OutlineButton>
              <Plus className="size-4 text-zinc-600" />
              Caminar
            </OutlineButton>

            <OutlineButton>
              <Plus className="size-4 text-zinc-600" />
              Ler um Livro
            </OutlineButton>

            <OutlineButton>
              <Plus className="size-4 text-zinc-600" />
              Ver um filme
            </OutlineButton>
          </div>
        </div>
        <div className="flex flex-col  gap-6">
          <h2 className="text-xl font-medium">Sua Semana!</h2>

          <div className="flex flex-col  gap-4">
            <h3 className="font-medium">
              Domingo:
              <span className="text-zinc-400 ml-2 text-xs">(10 de agosto)</span>
            </h3>

            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2">
                <CheckCircle className="size-4 text-pink-500" />
                <span className="text-smal text-zinc-400">
                  Você completou "
                  <span className="text-zinc-100">Acordar Cedo</span>" ás
                  <span className="text-zinc-100 ml-2">08:30</span>
                </span>
              </li>

              <li className="flex items-center gap-2">
                <CheckCircle className="size-4 text-pink-500" />
                <span className="text-smal text-zinc-400">
                  Você completou "
                  <span className="text-zinc-100">Ler um Livro</span>" ás
                  <span className="text-zinc-100 ml-2">14:30</span>
                </span>
              </li>

              <li className="flex items-center gap-2">
                <CheckCircle className="size-4 text-pink-500" />
                <span className="text-smal text-zinc-400">
                  Você completou "
                  <span className="text-zinc-100">Andar á cavaloS</span>" ás
                  <span className="text-zinc-100 ml-2">10:30</span>
                </span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col  gap-4">
            <h3 className="font-medium">
              Segunda:
              <span className="text-zinc-400 ml-2 text-xs">
                (12 de setembro )
              </span>
            </h3>

            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2">
                <CheckCircle className="size-4 text-pink-500" />
                <span className="text-smal text-zinc-400">
                  Você completou "
                  <span className="text-zinc-100">Acordar Cedo</span>" ás
                  <span className="text-zinc-100 ml-2">08:30</span>
                </span>
              </li>

              <li className="flex items-center gap-2">
                <CheckCircle className="size-4 text-pink-500" />
                <span className="text-smal text-zinc-400">
                  Você completou "
                  <span className="text-zinc-100">Ler um Livro</span>" ás
                  <span className="text-zinc-100 ml-2">14:30</span>
                </span>
              </li>

              <li className="flex items-center gap-2">
                <CheckCircle className="size-4 text-pink-500" />
                <span className="text-smal text-zinc-400">
                  Você completou "
                  <span className="text-zinc-100">Andar á cavaloS</span>" ás
                  <span className="text-zinc-100 ml-2">10:30</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sumary
