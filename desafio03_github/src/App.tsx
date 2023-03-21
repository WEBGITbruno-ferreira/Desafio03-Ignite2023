import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { IssueCard } from "./components/IssueCard";
import { MainTopCard } from "./components/MainTopCard";
import { GlobalStyle, MainContent } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";



export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
   
    <Header/> 
    <MainContent>

    <MainTopCard/>

    <IssueCard/>


    </MainContent>
    <GlobalStyle />
    </ThemeProvider>
  )
}
