

// import { Mounting } from './life-circle/Mouting'
// import { TodoList } from './life-circle/TodoList'
// import './App.css'
import { Watch } from "./pages/Watch"
import { Routes, Route } from "react-router"
import { Marketplace } from "./pages/MarketPlace"
import { BaseTemplate } from "./template/BaseTemplate"
import { GroupFeed } from "./pages/GroupFeed"
import { Home } from "./pages/Home"
import { PageNotFound } from "./pages/PageNotFound"
import { Login } from "./pages/Login"
function App() {

  return (
    <>
      {/* <Mounting/> */}
      {/* <TodoList/> */}


      <Routes>

      <Route path="/" Component={Home}/>
      <Route path="home" Component={Home}></Route>
        {/* setup những component có chung template  */}
        <Route Component={BaseTemplate}>

          <Route path="watch" element={<Watch />}> </Route>
          <Route path="marketplace" element={<Marketplace />} ></Route>
          <Route path="group/feed" Component={GroupFeed}></Route>
          

        </Route>
        <Route path="login" Component={Login}></Route>

        <Route path="*" Component={PageNotFound}> </Route>

      </Routes>
    </>
  )
}
export default App
