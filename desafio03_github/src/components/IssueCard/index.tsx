import { useContext } from "react";
import { RepoIssuesContext } from "../../context/IssuesContext";
import { DivtextIssue, IssueCardContainer, IssueCardContent } from "./styles";
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useNavigate  } from "react-router-dom";



export function IssueCard() {
  const { issues } = useContext(RepoIssuesContext)


  const navigate = useNavigate();


  function handleClick(numberIssue : string) {

    let  issueMatch = issues.filter((issue)=> issue.number === numberIssue) 

    return  navigate(`/issuedetail?number=${numberIssue}`, { state : {issueMatch}});

  } 


  return (

    <IssueCardContainer >


      {issues.map((issue) => (

        <IssueCardContent key={issue.id} onClick={()=>handleClick(issue.number)}>
          <h4> {issue.title} </h4>
          <span> {formatDistanceToNow(new Date(issue.createdAt),

            {
              addSuffix: true,
              locale: ptBR,
            }



          )} </span>
          <DivtextIssue key={issue.id}>


            <p>{issue.body.substring(1,200).concat((issue.body.length > 200) ? '...' : '' )}</p>
          </DivtextIssue>
        </IssueCardContent>
      ))}
 
    </IssueCardContainer>
  )
}
