import './index.css'

import { Dialog } from './components/ui/dialog'
import Sumary from './components/sumary'
import EmptyGoals from './components/empty-goals'
import { useEffect, useState } from 'react'
import CreateGoal from './components/create-goal'

function App() {
  const [summary, setSummary] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/summary')
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data)
        setSummary(data.summary)
      })
  }, [summary])

  return (
    <>
      <Dialog>
        {summary?.total > 0 ? <Sumary /> : <EmptyGoals />}

        <CreateGoal />
      </Dialog>
    </>
  )
}

export default App
