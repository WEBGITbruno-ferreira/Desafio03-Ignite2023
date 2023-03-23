import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { IssueCard } from "./components/IssueCard";
import { MainTopCard } from "./components/MainTopCard";
import { SearchForm } from "./components/SearchForm";
import { RepoIssuesProvider } from "./context/TransactionContext";
import { Router } from "./Router";
import { GlobalStyle, MainContent } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";



export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
    <BrowserRouter> 
    <RepoIssuesProvider>
    <Router />
    </RepoIssuesProvider>

    <GlobalStyle />
    </BrowserRouter>
    </ThemeProvider>
  )
}
