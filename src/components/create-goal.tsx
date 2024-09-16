import { X } from 'lucide-react'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'
import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
} from './ui/radio-group'
import { Button } from './ui/button'

function CreateGoal() {
  return (
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
  )
}

export default CreateGoal
