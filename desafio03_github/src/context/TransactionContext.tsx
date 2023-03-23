import { createContext, ReactNode, useCallback, useEffect, useState } from 'react'

import { api } from '../lib/axios'

interface CreateRepoIssuesInput {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

interface RepoIssues {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface RepoIssuesContextType {
  repoIssuess: RepoIssues[]
  //fetchTransactions: (query?: string) => Promise<void>
  //createTransaction: (data: CreateRepoIssuesInput) => Promise<void>
}

export const RepoIssuesContext = createContext(
  {} as RepoIssuesContextType,
)

interface RepoIssuesProps {
  children: ReactNode
}

export function RepoIssuesProvider({ children }: RepoIssuesProps) {
  const [repoIssuess, setRepoIssuess] = useState<RepoIssues[]>([])

  const fetchIssues = useCallback(async (query?: string) => {
    const response = await api.get('/transactions', {
      params: {
        q: query,
        _sort: 'createdAt',
        _order: 'desc',
      },
    })

    console.log(response)
    setRepoIssuess(response.data)
  }, [])


  useEffect(() => {
    fetchIssues()
  }, [repoIssuess])

  return (
    <RepoIssuesContext.Provider
      value={{ repoIssuess }}
    >
      {children}
    </RepoIssuesContext.Provider>
  )
}
