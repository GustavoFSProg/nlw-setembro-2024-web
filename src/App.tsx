import { Plus, X } from 'lucide-react'
import './index.css'
import logo from './assets/in-orbit-logo.svg'
import start from './assets/lets-start.svg'
import { Button } from './components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from './components/ui/dialog'
import { Input } from './components/ui/input'
import { Label } from './components/ui/label'
import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
} from './components/ui/radio-group'

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
          <DialogTrigger asChild>
            <Button>
              <Plus className="size-4 mr-1.5" />
              Cadastrar Meta
            </Button>
          </DialogTrigger>
        </div>
        <DialogContent>
          <div className="flex h-full flex-col gap-6">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <DialogTitle>Cadastrar Meta</DialogTitle>
                <DialogClose>
                  <X className="size-5 text-zinc-600" />
                </DialogClose>
              </div>
              <DialogDescription>
                Adicione atividades que te fazem bem e que você quer continuar
                praticando toda semana.
              </DialogDescription>
            </div>
            <form className="flex-1 flex flex-col justify-between" action="">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="title">Qual a atividade?</Label>
                  <Input
                    id="title"
                    autoFocus
                    placeholder="Praticar exercicios, meditar..."
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="title">Quantas vezes na semana?</Label>
                  <Input
                    id="title"
                    autoFocus
                    placeholder="Praticar exercicios, meditar..."
                  />
                </div>
                <RadioGroup>
                  <RadioGroupItem value="1">
                    <RadioGroupIndicator />
                    <span
                      className="text-zinc-300 
                    leading-none
                    font-medium text-sm"
                    >
                      1x na semana
                    </span>
                    <span className="text-lg leading-none">🙂</span>
                  </RadioGroupItem>

                  <RadioGroupItem value="2">
                    <RadioGroupIndicator />
                    <span
                      className="text-zinc-300 
                    leading-none
                    font-medium text-sm"
                    >
                      2x na semana
                    </span>
                    <span className="text-lg leading-none">😆</span>
                  </RadioGroupItem>

                  <RadioGroupItem value="3">
                    <RadioGroupIndicator />
                    <span
                      className="text-zinc-300 
                    leading-none
                    font-medium text-sm"
                    >
                      3x na semana
                    </span>
                    <span className="text-lg leading-none">😄</span>
                  </RadioGroupItem>
                </RadioGroup>
              </div>
              <div className="flex items-center gap-3">
                <DialogClose asChild>
                  <Button type="button" className="flex-1" variant="secondary">
                    Fechar
                  </Button>
                </DialogClose>
                <Button className="flex-1">Salvar</Button>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default App
