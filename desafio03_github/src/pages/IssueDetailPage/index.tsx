
import { ArrowSquareUpRight, CalendarBlank, CaretLeft, ChatCircle, GithubLogo } from "@phosphor-icons/react";
import { IconsArea, IssueDescription, IssueDetailContainer, IssueTitle, IssueTopCardContainer, LinksSpacer } from "./styles";
import { MainContent } from "../../styles/global";

import {  useLocation } from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'



export function IssueDetailPage() {
  

  const markdown = `Just a link: https://reactjs.com.`

  const loc = useLocation()
  console.log(loc)
  console.log(loc.state !== null)


if (loc.state !== null) {


  return (

    
<MainContent>
<IssueDetailContainer>
<IssueTopCardContainer>
  <LinksSpacer>
   <a href="/">    <CaretLeft size={20} color="#3294F8" weight="fill" /> VOLTAR</a> 
    <a href={loc.state.issueMatch[0].html_url}>VER NO GITHUB  <ArrowSquareUpRight size={20} color="#3294F8"  /> </a>

  </LinksSpacer>

  <IssueTitle>
    <p> {loc.state.issueMatch[0].title} </p>
  </IssueTitle>

  <IconsArea><a href=''></a>
    <div> <GithubLogo size={30} color="#0B1B2B" weight="fill"/> {loc.state.issueMatch[0].author} </div>
    <div> <CalendarBlank size={30} color="#0B1B2B" weight="fill" /> {loc.state.issueMatch[0].createdAt} </div>
    <div> <ChatCircle size={30} color="#0B1B2B" weight="fill" />  {loc.state.issueMatch[0].comments} comentários</div> 
  </IconsArea>
</IssueTopCardContainer>

<IssueDescription>


<ReactMarkdown  children={loc.state.issueMatch[0].body} remarkPlugins={[remarkGfm]} /> 

</IssueDescription>

</IssueDetailContainer>



</MainContent>




  )

  } else {
    
    return  <> </> ;

  }
}