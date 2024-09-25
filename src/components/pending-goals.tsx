import { Plus } from 'lucide-react'
import { OutlineButton } from './ui/outline-button'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getPendingGoals } from '../http/get-pending-goals'
import { createGoalCompletion } from '../axios/create-goal-completion-axios'
// import { createGoalCompletion } from '../http/create-goal-completion'
import {refreshContext} from '../refreshContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
// import { Button } from './ui/button'

export function PendingGoals() {
  const queryClient = useQueryClient()
  const {setRefresh} = useContext(refreshContext)
  const navigate = useNavigate()


  const { data, isLoading } = useQuery({
    queryKey: ['pending-goals'],
    queryFn: getPendingGoals,
  })

  if (isLoading || !data) {
    return null
  }

  function Relaods(){

    
    setRefresh( true)
        
    navigate('/')
     
  }

  async function handleCreateGoalCompletion(
    goalId: string) {
await createGoalCompletion({ goalId })

//  console.log(`espera: ${espera}`)





    queryClient.invalidateQueries({ queryKey: ['summary'] })
    queryClient.invalidateQueries({ queryKey: ['pending-goals'] })
 
   
  }

//  async function delteGoalId(goalId){
//     await api.delete(`/${goalId}`)
//   }

  return (
    <div className="flex flex-wrap gap-3">
      {data.pendingGoals.map(goal => {
        return (
          <>
            {/* <button type="button" 
          onClick={() => 
            Relaods() 
          }
          > */}
            
         
          <OutlineButton
            key={goal.id}
            onClick={async function anonyma() {
             await handleCreateGoalCompletion(goal.id)
              Relaods()
          }
             }
            disabled={goal.completionCount >= goal.desiredWeeklyFrequency}
            hidden={goal.completionCount >= goal.desiredWeeklyFrequency}
            >
            <Plus className="size-4 text-zinc-600" />

            {goal.title}
          </OutlineButton>
          {/* </Button> */}
            </>
        )
      })}
    </div>
  )
}
