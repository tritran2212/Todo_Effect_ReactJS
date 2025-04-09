

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
import { PrivateRoute } from "./template/PrivateRoute"
import { Register } from "./pages/Register"

import {useState, createContext} from "react"
import { ThemeProvider } from "./providers/ThemeProvider"
// b2  kết nối react -redux với react
import {Provider } from "react-redux"
import { store } from "./store"

// Bước 1: Tạo context để lưu giuẫ state
export const UserLoginContext = createContext();
// Global state for the website background image


function App() {
  const  [userLogin ,setUserLogin] = useState({
     id:1,
     username :"nguyen van  b"
  })

  return (
    <>
      {/* <Mounting/> */}
      {/* <TodoList/> */}

    {/*  b2: bọc toàn bộ UserLoginContext .Provider
         b3: Cung cấp  dữ liệu mà userLoginContext cần lưu giữ */}
    <ThemeProvider>
     <UserLoginContext.Provider value={userLogin}>

     <Routes>
        {/*  Page đầu tiên khi vào trang web  của mình */}
        <Route index Component={Home}></Route>
        <Route path="/" Component={Home} />
        <Route path="home" Component={Home}></Route>
        {/* setup những component có chung template  */}
        {/* <Route Component={PrivateRoute}> */}
          <Route Component={BaseTemplate}>

            <Route path="watch" element={<Watch />}> </Route>
            <Route path="marketplace" element={<Marketplace />} ></Route>
            <Route path="group/feed" Component={GroupFeed}></Route>


          </Route>
        {/* </Route> */}
        <Route path="login" Component={Login}></Route>
        <Route path="register"  Component ={Register}userLogin ={userLogin}></Route> 

        <Route path="*" Component={PageNotFound}> </Route>

      </Routes>
     </UserLoginContext.Provider>
     </ThemeProvider>
    </>
  )
}
export default App
