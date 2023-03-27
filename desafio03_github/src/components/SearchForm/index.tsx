import { useContext, useState } from "react";
import { RepoIssuesContext } from "../../context/IssuesContext";
import { SearchFormContainer, TextOverButton } from "./styles";




export function SearchForm() {

  const {issues, repo, fetchIssues} = useContext(RepoIssuesContext)
  const [searchValue, setSearcValue]  = useState('')

 async function findApitext(typedSearch : string) {
    setSearcValue(typedSearch)
    if (typedSearch) {
   await  fetchIssues(repo.login, typedSearch)
    }



  }

  return (
    <SearchFormContainer >
      <TextOverButton>
        <p> Publicações</p>
        <p> {issues.length} Publicações</p>
      </TextOverButton>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        value={searchValue}
        onChange={(e) => findApitext(e.target.value)}
      />


    </SearchFormContainer>
  )
}
