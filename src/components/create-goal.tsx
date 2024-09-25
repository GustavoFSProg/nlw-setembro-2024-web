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
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { createGoal } from '../axios/create-goal-axios'
// import { createGoal } from '../http/create-goal'
// import { useQueryClient } from '@tanstack/react-query'
// import TransitionsTooltips from './ToolTip'
import Progress from './Progress'
// import CircularWithValueLabel from './CirclarPercentage'
import { useState } from 'react'
// import { locationReload } from './sumary'

const createGoalForm = z.object({
  title: z.string().min(1, 'Informe a atividade que deseja realizar!'),
  desiredWeeklyFrequency: z.coerce.number().min(1).max(7),
})

type CreateGoalForm = z.infer<typeof createGoalForm>

function CreateGoal() {
  const [loading, setLoading] = useState(false)

  const { register, control, formState, handleSubmit } =
    useForm<CreateGoalForm>({
      resolver: zodResolver(createGoalForm),
    })
  // const queryClient = useQueryClient()

  async function handleCreateGoals(data: CreateGoalForm) {
     setLoading(true)

   await createGoal({
      title: data.title,
      desiredWeeklyFrequency: data.desiredWeeklyFrequency,
    })

    // locationReload()
    // console.log(data)
    // queryClient.invalidateQueries({ queryKey: ['summary'] })
    // queryClient.invalidateQueries({ queryKey: ['pending-goals'] })

    // reset()
  }

  return (
    <>

      <DialogContent>
        <div className="flex  flex-col gap-6  max-md:w-72 max-md:ml-11">
          <div className="flex  flex-col gap-3">
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
          <form
            onSubmit={handleSubmit(handleCreateGoals)}
            className="flex-1 flex flex-col justify-between"
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <Label htmlFor="title">Qual a atividade?</Label>
                <Input
                  id="title"
                  autoFocus
                  placeholder="Praticar exercicios, meditar..."
                  {...register('title')}
                />
                {formState.errors.title && (
                  <p className="text-red-400 text-sm">
                    {formState.errors.title.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="title">Quantas vezes na semana?</Label>
              </div>
              <Controller
                control={control}
                name="desiredWeeklyFrequency"
                defaultValue={1}
                render={({ field }) => {
                  return (
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={String(field.value)}
                    >
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

                      <RadioGroupItem value="4">
                        <RadioGroupIndicator />
                        <span
                          className="text-zinc-300 
                  leading-none
                  font-medium text-sm"
                        >
                          4x na semana
                        </span>
                        <span className="text-lg leading-none">🙂</span>
                      </RadioGroupItem>

                      <RadioGroupItem value="5">
                        <RadioGroupIndicator />
                        <span
                          className="text-zinc-300 
                  leading-none
                  font-medium text-sm"
                        >
                          5x na semana
                        </span>
                        <span className="text-lg leading-none">🙂</span>
                      </RadioGroupItem>

                      <RadioGroupItem value="6">
                        <RadioGroupIndicator />
                        <span
                          className="text-zinc-300 
                  leading-none
                  font-medium text-sm"
                        >
                          6x na semana
                        </span>
                        <span className="text-lg leading-none">🙂</span>
                      </RadioGroupItem>

                      <RadioGroupItem value="7">
                        <RadioGroupIndicator />
                        <span
                          className="text-zinc-300 
                  leading-none
                  font-medium text-sm"
                        >
                          7x na semana
                        </span>
                        <span className="text-lg leading-none">🙂</span>
                      </RadioGroupItem>
                    </RadioGroup>
                  )
                }}
              />
            </div>
      {loading === true ?  <Progress/> : 
      <div className='flex mt-20 -mb-20 items-center justify-center'>

      <p>Clique no botão Salvar!</p>
      </div>
      }
            <div className="flex items-center max-md:mt-44 mt-52 max-md:mt-20 gap-3">
              <DialogClose asChild>
                <Button type="button" className="flex-1" variant="secondary">
                  Fechar
                </Button>
              </DialogClose>
              <Button type="submit" className="flex-1">
                Salvar
              </Button>
            </div>
          </form>
        </div>
        <br />
        <br />
        {/* <Progress /> */}
      </DialogContent>

      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default CreateGoal
