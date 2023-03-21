
import { IconsArea, MainTopCardContainer, NameAndLink, TopCardContent } from './styles'
import avatar from '../../assets/avatar.png'
import  {GithubLogo, Buildings, Users}from '@phosphor-icons/react'

export function MainTopCard() {
  return (

    <MainTopCardContainer>
        <img src={avatar} alt="" />
        <TopCardContent> 

          <NameAndLink>
            <p>Cameron</p>
            <a href="">Github</a>

          </NameAndLink>

          <p> Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>

          <IconsArea><a href=''></a>  
            <GithubLogo size={30} color="#0B1B2B" weight="fill" /> 
            <Buildings size={30} color="#0B1B2B" weight="fill" /> 
            <Users size={30} color="#0B1B2B" weight="fill" /> 
            </IconsArea>
        </TopCardContent>
    </MainTopCardContainer>
  )
}
