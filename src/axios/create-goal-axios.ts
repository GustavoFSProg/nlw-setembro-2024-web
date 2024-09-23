import api from '../api'

export interface CreateGoalRequest {
  title: string
  desiredWeeklyFrequency: number
}

export async function createGoal({
  title,
  desiredWeeklyFrequency,
}: CreateGoalRequest): Promise<void> {
  // const response = await fetch('http://localhost:3333/goals', {
  const { goalId } = await api.post('/goals', { title, desiredWeeklyFrequency })

  if (!goalId) {
    throw new Error('Error while creating the goal completion')
  }
  return console.log('Criou  a Goal!')
}
