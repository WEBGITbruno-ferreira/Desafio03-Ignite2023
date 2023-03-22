import { IssueCard } from "../../components/IssueCard";
import { MainTopCard } from "../../components/MainTopCard";
import { SearchForm } from "../../components/SearchForm";
import { MainContent } from "../../styles/global";

export function HomePage() {

  return (
    
<MainContent>

<MainTopCard/>

<SearchForm/> 

<IssueCard/>


</MainContent>
  )
}