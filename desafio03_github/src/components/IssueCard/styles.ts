

import styled from 'styled-components'

export const IssueCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 2rem 2rem;
  margin-top: 10px;

`

export const IssueCard = styled.div`
  display: flex;

  background-color: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 2rem 2rem;
  margin-top: 10px;

`

