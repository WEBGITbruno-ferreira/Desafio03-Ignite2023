
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
           <div> <GithubLogo size={30} color="#0B1B2B" weight="fill" /> Cameron </div>
           <div> <Buildings size={30} color="#0B1B2B" weight="fill" /> Rocket </div>
           <div> <Users size={30} color="#0B1B2B" weight="fill" /> 32 Seguidores </div>
            </IconsArea>
        </TopCardContent>
    </MainTopCardContainer>
  )
}
