import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`


html{
  font-size: 16px;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}


:focus {
    outline: 0;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2)
  }


  body{
    background-color: ${(props) => props.theme['base-background']};
    color: ${(props) => props.theme['base-title']};
    -webkit-font-smoothing: antialiased;
    


  }

  body, input, textarea, button { 
    font: 400 1rem 'Nunito', sans-serif;
  }



`



  
export const MainContent  = styled.div`
//display: flex;
padding: 0 5vw;
z-index: 20;
position: relative; // para funcionar o z index
margin: 0 auto;

`
