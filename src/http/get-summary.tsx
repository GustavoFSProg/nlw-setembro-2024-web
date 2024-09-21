import { useQuery } from '@tanstack/react-query'

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

export async function getSummary(): Promise<SummaryResponse> {
  // const [summary, setSummary] = useState<SummaryResponse | null>(null)

  // const response = await fetch('http://localhost:3333/summary')
  const response = await fetch('https://in-orbit-nine.vercel.app/summary')
  const data = await response.json()

  return data.summary
}
