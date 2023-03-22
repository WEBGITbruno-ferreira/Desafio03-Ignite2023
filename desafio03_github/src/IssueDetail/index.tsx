
import { IconsArea, IssueDescription, IssueDetailContainer, IssueTitle, IssueTopCardContainer, LinksSpacer } from './styles'
import avatar from '../../assets/avatar.png'
import { GithubLogo, CalendarBlank, ChatCircle, CaretLeft, ArrowSquareUpRight } from '@phosphor-icons/react'


export function IssueDetail() {
  return (

    <IssueDetailContainer>

      <IssueTopCardContainer>
        <LinksSpacer>
         <a href="">    <CaretLeft size={20} color="#3294F8" weight="fill" /> VOLTAR</a> 
          <a href="">VER NO GITHUB  <ArrowSquareUpRight size={20} color="#3294F8"  /> </a>

        </LinksSpacer>

        <IssueTitle>
          <p> Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
        </IssueTitle>

        <IconsArea><a href=''></a>
          <div> <GithubLogo size={30} color="#0B1B2B" weight="fill"/> Cameron </div>
          <div> <CalendarBlank size={30} color="#0B1B2B" weight="fill" /> 1 dia </div>
          <div> <ChatCircle size={30} color="#0B1B2B" weight="fill" />  5 comentários</div> 
        </IconsArea>
      </IssueTopCardContainer>

      <IssueDescription>

        <p>
          Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

          Dynamic typing
          JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

        </p>
      </IssueDescription>

    </IssueDetailContainer>


  )
}
