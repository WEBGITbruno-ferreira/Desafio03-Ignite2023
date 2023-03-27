
import { ArrowSquareUpRight, CalendarBlank, CaretLeft, ChatCircle, GithubLogo } from "@phosphor-icons/react";
import { IconsArea, IssueDescription, IssueDetailContainer, IssueTitle, IssueTopCardContainer, LinksSpacer } from "./styles";
import { MainContent } from "../../styles/global";
import { useContext, useEffect, useState } from "react";
import { RepoIssuesContext } from "../../context/IssuesContext";
import {  useLocation, useNavigate } from "react-router-dom";






export function IssueDetailPage() {
  

  const navigate = useNavigate();

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

  <p>
    {loc.state.issueMatch[0].body}
  </p>
</IssueDescription>

</IssueDetailContainer>



</MainContent>




  )

  } else {
    
    return  <> </> ;

  }
}