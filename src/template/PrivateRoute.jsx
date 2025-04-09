import { Outlet , Navigate,useLocation} from "react-router"
export  function PrivateRoute(){
    // hook useLocation đặt đầu trang hiện tại
   const location = useLocation();
   console.log(location);

    // đăng nhập vào trang web của mình thì mới có thể vào được những trang này
    // chưa đăng nhập điều hướng về logiin
    // nếu như localStorage 
    const isLogin = localStorage.getItem("isLogin");
    
    // mọi thứ lưu vào localStorage đều là string 
    console.log("isLogin", isLogin, typeof isLogin)

    if(!isLogin && !JSON.parse(isLogin)){
         return <Navigate to ={`/login?to=${location.pathname} & role = user & language=vi` }/>
    }
    return(
        <>
            <Outlet/>
        </>
    )
}
// 