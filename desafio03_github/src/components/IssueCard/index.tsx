import { useContext } from "react";
import { RepoIssuesContext } from "../../context/IssuesContext";
import { DivtextIssue, IssueCardContainer, IssueCardContent } from "./styles";

export function IssueCard() {
  const {issues} = useContext(RepoIssuesContext)
  console.log('issues', issues)



  return (

    <IssueCardContainer>
        <IssueCardContent>
          <h4> JavaScript data types and data structures  </h4>
          <span> 1 dia</span>

          <DivtextIssue>
          <p> Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
          </p>
          </DivtextIssue>
        
        </IssueCardContent>
        <IssueCardContent>
          <h4> JavaScript data types and data structures  </h4>
          <span> 1 dia</span>

          <DivtextIssue>
          <p> Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
          </p>
          </DivtextIssue>
        
        </IssueCardContent>

        <IssueCardContent>
          <h4> JavaScript data types and data structures  </h4>
          <span> 1 dia</span>

          <DivtextIssue>
          <p> Programming languages all have built-in
          </p>
          </DivtextIssue>
        
        </IssueCardContent>
    </IssueCardContainer>
  )
}
