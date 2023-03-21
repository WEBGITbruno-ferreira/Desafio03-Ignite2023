import styled from 'styled-components'

export const HeaderContainter = styled.header`
  background-color: ${(props) => props.theme['base-background']};
  //padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1900px;
  margin: 0 0; //centralizando
 // padding: 0 1.5rem; // desgrudando das laterais
  display: flex;
  justify-content: center;
  align-items: top;
 


  img{ width: 100%;
     }
`
