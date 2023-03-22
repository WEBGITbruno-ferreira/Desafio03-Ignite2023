

import styled from 'styled-components'

export const IssueCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-radius: 10px;
  margin-top: 15px;
  grid-gap: 1.5rem;
  row-gap: 0.75rem;
  grid-template-rows: repeat(3, minmax(200px, 0.8fr)) ;
  overflow: hidden;


`

export const IssueCardContent = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  grid-template-rows:3.75rem 1fr;
  
  background-color: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 2rem 2rem;
  margin-top: 10px;
  line-height:200%;
  overflow: hidden;


  




`
export const DivtextIssue = styled.div` 
display: flex;
grid-column: span 2;
line-height:150%;
padding-top: 1rem;
align-items: top;


`


