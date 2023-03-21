import styled from 'styled-components'

export const HeaderContainter = styled.header`
  background-color: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto; //centralizando
  padding: 0 1.5rem; // desgrudando das laterais
  display: flex;
  justify-content: space-between;

  align-items: center;
`
