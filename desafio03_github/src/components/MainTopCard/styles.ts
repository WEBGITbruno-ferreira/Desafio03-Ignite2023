

import styled from 'styled-components'

export const MainTopCardContainer = styled.div`
  display: flex;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  padding: 2rem 2rem;
  margin: -100px 0 0 0;
  max-height: 20rem;

  img{ max-width: 148px;
      max-height: 148px;
      border-radius: 10%;

  }
  


`



export const TopCardContent = styled.div`
display: flex;
flex-direction: column;

width: 100%;
line-height: 150%;
padding: 10px 15px 0px 15px;



`

export const NameAndLink = styled.div`
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



export const IconsArea = styled.div`
  display: flex;

  div{
    display: flex;
    margin-right: 20px;
    gap: 5px;
    justify-content: center;
    align-items: center;
    margin-right: 20px;

  }

svg {
  padding: 2px;
  background-color: ${(props) => props.theme['base-label']};
  border-radius: 100px;


  }
`
