import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { RepoIssuesProvider } from "./context/IssuesContext";

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
