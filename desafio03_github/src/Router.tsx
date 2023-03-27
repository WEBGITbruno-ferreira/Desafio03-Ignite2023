import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { HomePage } from './pages/HomePage'
import { IssueDetailPage } from './pages/IssueDetailPage'

//import { OrderComplete } from './pages/OrderComplete'


export function MyRouter() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route  path="/" element={<HomePage />}></Route>
        <Route  path="/issuedetail" element={<IssueDetailPage  /> }></Route> 
      </Route>

     
      

     
    </Routes>
  )
}
