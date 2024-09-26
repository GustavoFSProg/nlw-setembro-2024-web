import { CheckCircle, Plus } from 'lucide-react'
import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'
import CreateGoal from './create-goal'
import InOrbitIconSVG from './in-orbit-icon'
import { Progress, ProgressIndicator } from './ui/progress-bar'
import { Separator } from './ui/separator'
import { useQuery } from '@tanstack/react-query'
import { getSummary } from '../http/get-summary'
import dayjs from 'dayjs'
import ptBR from 'dayjs/locale/pt-br'
// import type {
//   ReactElement,
//   JSXElementConstructor,
//   ReactNode,
//   ReactPortal,
// } from 'react'
import { PendingGoals } from './pending-goals'
import { useContext, useEffect } from 'react'
import {refreshContext} from '../refreshContext'


dayjs.locale(ptBR)

type SummaryResponse = {
  completed: number
  total: number
  goalsPerDay: Record<
    string,
    {
      id: string
      title: string
      createdAt: string
    }[]
  >
}


function Sumary() {
  const { data } = useQuery<SummaryResponse | undefined>({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60, // 60 seconds
  })
  
  if (!data) {
    return null
  }
  const {refresh} = useContext(refreshContext)

  if(refresh === true){
    location.reload()
    console.log(refresh)
  }
    // console.log(refresh)

  const firstDayOfWeek = dayjs().startOf('week').format('D MMM')
  const lastDayOfWeek = dayjs().endOf('week').format('D MMM')

  const completedPrecentage = Math.round((data?.completed * 100) / data?.total)

  useEffect(() => {
    // location.reload()
  },[])


  return (
    <>
      <div
        className=" bg-zinc-900
      flex
        justify-center
        items-center
    h-auto
    w-full
    -mt-36
    pb-56
    pt-1
    "
      >
        <div
          className=" bg-zinc-800
          gap-6 text-white py-10
          flex flex-col
          h-auto
          w-[480px]
          -mt-10
          px-5"
          >
          <CreateGoal />
          <div className='flex h-auto w-[100%]
           mt-4 
          items-center justify-center
          pr-5
          pl-5
          pb-6
          pt-6
          
          rounded-2xl
                    bg-[#28364d]'>

          <h1 className='flex items-center 
         
          text-center
          justify-center text-[20px]
          max-md:text-[17px]
          text-white'>APP DE CADASTRO E CONTROLE DE METAS</h1>
          </div>

          <div
            className="flex flex-row h-20 w-full
            items-center
            justify-between"
          >
            <div className="flex items-center gap-3">
              <InOrbitIconSVG />
              <span className="text-lg font-semibold ">
                {firstDayOfWeek}
                <span className="mr-2 ml-2"> á </span>
                {lastDayOfWeek}
              </span>
            </div>
            <div className="flex max-md:flex-col justify-between">
            {/* <button className="mr-4 max-md:mb-2 max-md:mt-5" onClick={() => location.reload()}>
                <RefreshCcw size="25"/>
              </button> */}
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
              <ProgressIndicator style={{ width: `${completedPrecentage}` }} />
            </Progress>

            <div className="flex items-center justify-between text-xs text-zinc-400">
              <span>
                Você completou
                <span className="text-zinc-100 ml-1">{data?.completed}</span>{' '}
                das
                <span className="text-zinc-100 ml-1 mr-1">{data?.total}</span>
                metas da semana
              </span>
              <span>{completedPrecentage}%</span>
            </div>
            <Separator />
            <PendingGoals />
          </div>
          <div className="flex flex-col pb-8 gap-6">
            <h2 className="text-xl font-medium">Sua Semana!</h2>

            {Object.entries(data.goalsPerDay).map(([date, goals]: any) => {
              const weekDay = dayjs(date).format('dddd')

              const formatDate = dayjs(date).format('D[ de ]MMM')
              // const toDate = dayjs().endOf('week').format('D[ de ]MMM')

              return (
                <div key={date} className="flex flex-col  gap-4">
                  <h3 className="font-medium">
                    {weekDay}
                    <span className="text-zinc-400 ml-2 text-xs">
                      {formatDate}
                    </span>
                  </h3>

                  <ul className="flex flex-col gap-3">
                    {goals.map(
                      (goal: {
                        [x: string]: string | number | Date | null | undefined
                        title: string
                        key: string
                        // | string
                        // | number
                        // | boolean
                        // // | ReactElement<string | JSXElementConstructor>
                        // | Iterable<ReactNode>
                        // | ReactPortal
                        // | null
                        // | undefined
                      }) => {
                        const time = dayjs(goal.createdAt).format('HH:mm[h]')

                        // dayjs(goal.createdAt).format('HH:MM')
                        return (
                          <li
                            key={`${goal.id}`}
                            className="flex items-center gap-2"
                          >
                            <CheckCircle className="size-4 text-pink-500" />
                            <span className="text-smal text-zinc-400">
                              Você completou "
                              <span className="text-zinc-100 ml-1 mr-1">
                                {goal.title}"
                              </span>
                              {formatDate}
                              <span className="text-zinc-100 ml-2">{time}</span>
                            </span>
                          </li>
                        )
                      }
                    )}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Sumary
