import { Plus } from 'lucide-react'
import { OutlineButton } from './ui/outline-button'
import { useQuery } from '@tanstack/react-query'
import { getPendingGoals } from '../http/get-pending-goals'
import { createGoalCompletion } from '../axios/create-goal-completion-axios'
// import { createGoalCompletion } from '../http/create-goal-completion'
import {refreshContext} from '../refreshContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from './ui/button'

export function PendingGoals() {
  // const queryClient = useQueryClient()
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





    // queryClient.invalidateQueries({ queryKey: ['summary'] })
    // queryClient.invalidateQueries({ queryKey: ['pending-goals'] })
 
   
  }

//  async function delteGoalId(goalId){
//     await api.delete(`/${goalId}`)
//   }

  return (
    <div className="flex flex-wrap gap-3">
    <h1>METAS PENDENTES:</h1>
   <p className='mb-1 text-[15px]'>
       Clique na Atividade (meta) e depois clique em ATUALIZAR para completar a meta!
    </p>
        <Button type="button"
     onClick={() => 
       Relaods() 
     }
     > 
     ATUALIZAR

</Button>
      {data.pendingGoals.map(goal => {
        return (
          <>
            
         
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
          {/*  */}
            </>
        )
      })}
    </div>
  )
}
