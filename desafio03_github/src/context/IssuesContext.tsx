import { createContext, ReactNode, useCallback, useEffect, useState } from 'react'

import { api } from '../lib/axios'


interface Issue {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  closedAt: string;
  number : string;
  html_url: string;
  author: string;
  comments: string;
}

interface Repo {
  login: string,
  name: string,
  avatar_url: string,
  bio: string
  company: string,
  followers: string,
  html_url: string,


}


interface RepoIssuesContextType {
  repo: Repo
  issues: Issue[]
  fetchIssues: (userLogin: string , query?: string) => Promise<void>

}

export const RepoIssuesContext = createContext(
  {} as RepoIssuesContextType,
)

interface RepoIssuesProps {
  children: ReactNode
}

export function RepoIssuesProvider({ children }: RepoIssuesProps) {

  const [repo, setRepo] = useState<Repo>({
    login: 'x',
    name: '',
    avatar_url: '',
    bio: '',
    company: '',
    followers: '',
    html_url: ''
  })

  const [issues, setIssues] = useState<Issue[]>([])

  let  bioInfoGithub = {} as Repo
  const fetchBio = async () => {
    
    
      const response = await api.get('/users/WEBGITbruno-ferreira')
    //  console.log('response.data' , response.data)
      const { login, company, followers, name, bio, avatar_url, html_url } = response.data
      bioInfoGithub = {
        login,
        company,
        followers,
        name,
        bio,
        avatar_url, 
        html_url
      }   

     // console.log('bioInfoGithub', bioInfoGithub)
      setRepo(bioInfoGithub as Repo)   

      await fetchIssues(bioInfoGithub.login)

  }


  const fetchIssues = async (userLogin : string, query?: string, ) => {

    const user = userLogin
   // console.log('user', user)
    const textSearch = query ? query : ''
    const response = await api.get('/search/issues', {
      params: {
        q: `${textSearch}repo:${user}/Desafio03-Ignite2023`,

      },
    })

    console.log('response.data' , response.data)
    let draftIssues: Issue[] = []
    if (response){
    response.data.items.map((issueItem: any) => {

      let issueDetail : Issue =
      {
        id: issueItem.id,
        title: issueItem.title,
        body: issueItem.body,
        number: issueItem.number.toString(),
        createdAt: issueItem.created_at,
        updatedAt: issueItem.updated_at,
        closedAt: issueItem.closed_at,
        html_url: issueItem.html_url, 
        author: issueItem.user.login,
        comments : issueItem.comments.toString()
      }

      draftIssues.push(issueDetail)
    })

    setRepo(bioInfoGithub)
    setIssues(draftIssues)
   }


    }


 


  useEffect(() => {
    fetchBio()
    console.log('useEffect')


  }, [])

  return (
    <RepoIssuesContext.Provider
      value={{ repo, issues, fetchIssues }}

    >

      {children}
    </RepoIssuesContext.Provider>
  )
}


