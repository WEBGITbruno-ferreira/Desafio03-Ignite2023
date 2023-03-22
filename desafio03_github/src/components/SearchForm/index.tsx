import { SearchFormContainer, TextOverButton } from "./styles";




export function SearchForm() {



  return (
    <SearchFormContainer >
      <TextOverButton>
        <p> Publicações</p>
        <p> 6 Publicações</p>
      </TextOverButton>
      <input
        type="text"
        placeholder="Buscar conteúdo"
       
      />


    </SearchFormContainer>
  )
}
