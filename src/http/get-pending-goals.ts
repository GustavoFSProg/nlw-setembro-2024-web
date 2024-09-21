export interface GetPendingGoalsResponse {
  pendingGoals: {
    id: string
    title: string
    desiredWeeklyFrequency: number
    completionCount: number
  }[]
}

export async function getPendingGoals(): Promise<GetPendingGoalsResponse> {
  const response = await fetch('https://in-orbit-nine.vercel.app/pending-goals')
  // const response = await fetch('http://localhost:3333/pending-goals')
  const data = await response.json()

  console.log(data)

  return data
}
