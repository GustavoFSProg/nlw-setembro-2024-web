import './index.css'

import { Dialog } from './components/ui/dialog'
import Sumary from './components/sumary'
import EmptyGoals from './components/empty-goals'
// import { useEffect, useState } from 'react'
import CreateGoal from './components/create-goal'
import { useQuery } from '@tanstack/react-query'
import { getSummary } from './http/get-summary'

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

  const { data } = useQuery<SummaryResponse | undefined>({
    queryKey: ['summary'],
    queryFn: getSummary,
  })

  // useEffect(() => {
  // fetch('http://localhost:3000/summary')
  //   .then(response => {
  //     return response.json()
  //   })
  //   .then(data => {
  //     console.log(data)
  //     setSummary(data.summary)
  //   })
  // }, [summary])

  return (
    <>
      <Dialog>
        {data?.total && data.total > 0 ? <Sumary /> : <EmptyGoals />}

        <CreateGoal />
      </Dialog>
    </>
  )
}

export default App
