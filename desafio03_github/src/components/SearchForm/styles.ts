
import styled from 'styled-components'


export const SearchFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top:4rem;


  input {
    flex: 1;
    border-radius: 6px;
    border: 1;
    border-style: solid;
    border-color: ${(props) => props.theme['base-border']};;
    background-color: ${(props) => props.theme['base-background']};
    color: ${(props) => props.theme['base-text']};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
export const TextOverButton = styled.div`
display: flex;
justify-content: space-between;
padding: 1rem 0;


` 