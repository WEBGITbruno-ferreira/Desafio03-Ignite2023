
import { IconsArea, MainTopCardContainer, NameAndLink, TopCardContent } from './styles'
import avatar from '../../assets/avatar.png'
import  {GithubLogo, Buildings, Users, ArrowSquareUpRight}from '@phosphor-icons/react'
import { RepoIssuesContext } from '../../context/IssuesContext'
import { useContext, useEffect } from 'react'

export function MainTopCard() {
  const {repo} = useContext(RepoIssuesContext)
  console.log(repo)


  return (

    <MainTopCardContainer>
        <img src={avatar} alt="" />
        <TopCardContent> 

          <NameAndLink>
            <p>{repo.name}</p>
            <a href={repo.html_url}>VER NO GITHUB  <ArrowSquareUpRight size={20} color="#3294F8"  /> </a>

          </NameAndLink>

          <p> {repo.bio ? repo.bio : 'Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.' }
          </p>

          <IconsArea><a href=''></a>  
           <div> <GithubLogo size={30} color="#0B1B2B" weight="fill" /> {repo.name} </div>
           <div> <Buildings size={30} color="#0B1B2B" weight="fill" /> {repo.company ? repo.company : 'BR Tech DevSolution'} </div>
           <div> <Users size={30} color="#0B1B2B" weight="fill" /> {repo.followers} Seguidor {repo.followers > '1' ? 'es' : ''} </div>
            </IconsArea>
        </TopCardContent>
    </MainTopCardContainer>
  )
}
