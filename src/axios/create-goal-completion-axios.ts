import api from '../api'

export interface CreateGoalCompletionRequest {
  goalId: string
}

export async function createGoalCompletion({
  goalId,
}: CreateGoalCompletionRequest): Promise<void> {
  // const response = await fetch('http://localhost:3333/completions', {
  // const response = await fetch('https://in-orbit-nine.vercel.app/completions', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     goalId,
  //   }),
  // })

  const response = await api.post('http://localhost:3333/completions', {
    goalId,
  })

  location.reload()

  if (!response) {
    throw new Error('Error while creating the goal completion')
  }
}
