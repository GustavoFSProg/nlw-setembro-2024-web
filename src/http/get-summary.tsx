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

  const response = await fetch('http://localhost:3000/summary')
  const data = await response.json()

  return data.summary
}
