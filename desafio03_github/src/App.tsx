import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { IssueCard } from "./components/IssueCard";
import { MainTopCard } from "./components/MainTopCard";
import { SearchForm } from "./components/SearchForm";
import { Router } from "./Router";
import { GlobalStyle, MainContent } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";



export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
    <BrowserRouter> 
    <Router />
   {/** <MainContent>

    <MainTopCard/>

    <SearchForm/> 

    <IssueCard/>


    </MainContent> */}
    <GlobalStyle />
    </BrowserRouter>
    </ThemeProvider>
  )
}
