import './index.css'

import { Dialog } from './components/ui/dialog'
import Sumary from './components/sumary'
import EmptyGoals from './components/empty-goals'
// import { useEffect, useState } from 'react'
import CreateGoal from './components/create-goal'
import { useQuery } from '@tanstack/react-query'
import { getSummary } from './http/get-summary'
// import { useEffect } from 'react'
// import { useContext, useEffect } from 'react'
// import {refreshContext} from './refreshContext'

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

function App() {
  // const [summary, setSummary] = useState<SummaryResponse | null>(null)
  // const {refresh, setRefresh} = useContext(refreshContext)

  const { data } = useQuery<SummaryResponse | undefined>({
    queryKey: ['summary'],
    queryFn: getSummary,
  })

  // useEffect(() => {
  //   //  location.reload()
  // }, [data])


  //  setRefresh(true)

  //  console.log(refresh)
  return (
    <>
    {/* {refresh} */}
      <Dialog>
        {data?.total && data.total > 0 ? <Sumary /> : <EmptyGoals />}

        <CreateGoal />
      </Dialog>
    </>
  )
}

export default App
