

import styled from 'styled-components'

export const IssueDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
 // background-color: ${(props) => props.theme['base-profile']};
 // border-radius: 10px;
 // padding: 2rem 2rem;
//  margin: -100px 0 0 0;

`

export const IssueTopCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  padding: 2rem 2rem;
  margin: -100px 0 0 0;

`



export const LinksSpacer = styled.div`
display: flex;
align-self: stretch;
justify-content: space-between;
width: 100%;
margin: 0 0 10px 0;

p {font-size: 1.5rem;
   font-weight: bold;
  
  }

  svg{
    margin-bottom: -5px;    
  }

  a{
    text-decoration: none;
    justify-content: center;
    align-items: center;
    color: #3294F8;
  } 
  

`


export const IssueTitle = styled.div`
padding: 1.5rem 0;
font-size: 1.5rem;
font-weight: bold;
`



export const IconsArea = styled.div`
  display: flex;

  div{
    display: flex;
    margin-right: 20px;
    gap: 5px;
    justify-content: center;
    align-items: center;

  }

svg {
  padding: 2px;
  background-color: ${(props) => props.theme['base-label']};
  border-radius: 100px;


  }
`

export const IssueDescription = styled.div`
  padding: 2rem 2rem;

`
