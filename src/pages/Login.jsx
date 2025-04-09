
import { useNavigate ,useSearchParams,} from "react-router";
import {useFormik} from "formik";
// import hết tất cả export library Yup  dưới cái tên mới là y
import * as yup from "yup"; 
//  Schema login username và password
//  bắt buộc (k dc bo trong)
//  từ 5 kí tự trở lên (Không được nhập nhỏ hơn 5 kí tự)
// từ 50 kí tự trở xuống

// password
//bắt buộc(không được bỏ trống)
// tuwf8 kí tự trở lên(không được nhập nhỏ hơn 8 kí tự)
// từ 50 kí tự trở xuống (không được nhập hơn 50 kí tự)
// 1 chữ hoa
// 1 kí tự dặt
// 1 số
//1 chữ thuòng
const LoginSchema = yup.object({
    username: yup.string().required("Vui lòng nhập tên đăng nhập").min(5,"Không được ít hơn 5 ký tự").max(50,"Không được nhiều hơn 50 ký tự"),
    password: yup.string().required("Vui lòng nhập mật khẩu").min(8,"Không được ít hơn 8 ký tự").max(50,"Không được nhiều hơn 50 ký tự")
    .matches(/[A-Z]/, "Mật khẩu phải có ít nhất một chữ cái viết hoa")
    .matches(/[a-z]/, "Mật khẩu phải có ít nhất một chữ cái viết thường")
    .matches(/\d/, "Mật khẩu phải có ít nhất một số")
    .matches(/[@$!%*?&]/, "Mật khẩu phải có ít nhất một ký tự đặc biệt"),
})





const sv = {
    id:4,
    age : 20,
    username :"cyber"
}
const  StudentSchema = yup.object({

    id:yup.number().required(),
    age:yup.number().required(),
    username:yup.string().required(),

})

StudentSchema.validate(sv)
    .then((r)=>{
    console.log("success",r);
}).catch((e)=>{
    console.log("error",e);
})

 function sum(a,b){
     if(yup.number().isValidSync(a) && yup.number().isValidSync(b)){
         return a+b;
     }
 }
 console.log(sum(1,2));
export function Login(){
    const {values,touched,errors,handleBlur,handleChange,handleSubmit,getFieldProps} = useFormik({
    // khoi tao giá trị ban đầu cho form
        initialValues:{
            username: "",
            password:"",
        },
        // validate:(values)=>{
        //     // return {
        //     //     username: values.username ? "" : "Vui lòng nhập tên đăng nhập",
        //     //     password: values.password ? "" : "Vui lòng nhập mật khẩu",
        //     // }

        //     let error ={}
        //     if(values.username.trim().length===0){
        //         error.username ="Khong duoc bo trong username";
        //     }
        //     if(values.password.trim().length===0){
        //         error.password ="Khong duoc bo trong password";
        //     }
        //     return error;
        // },
        validationSchema : LoginSchema,

        onSubmit:(values) => { 
        //    console.log( values)
        //    console.log("Form submitted successfully!");
        },
    });
    console.log("errors", errors);
    console.log("touched" ,touched);
   const [searchParams]= useSearchParams();
   const to = searchParams.get("to");
    const navigate = useNavigate();

    const onSubmit = (event)=>{
    
         event.preventDefault();
         const formData =  new FormData(event.target);
         const data = Object.fromEntries(formData)
         console.log(data)
         
         if(data.username === "cyber" && data.password==="cyber"){
            //xét điều kiện khi đăng nhập thành công lưu isLogin
            localStorage.setItem("isLogin" , true);
            
            if(to){
                navigate(to)
            }
            else{
                navigate("/home")
            }
            
            // lưu vào localStorage   dể kiểm tra đăng nhập(5MB)
         }
    }
 console.log(errors, touched)
    return <>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Ten Dang Nhap
                </label>
                <input
                {...getFieldProps("username")}

                   name="username"
                    id="email"
                    className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder=" Enter name your"
                />
                
                {
                    
                    touched.username && errors.username && (
                        <span className="text-red-500">{errors.username}</span>
                    )
                }
                </div>
                <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                </label>
                <input
                {...getFieldProps("password")}
                    name="password"
                    type="password"
                    id="password"
                    className="w-full px-4 py-2 mt-1 text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your password"
                />
                {
                    touched.password && errors.password && (
                        <span className="text-red-500">{errors.password}</span>
                    )
                }
                
                </div>
                <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                Login
                </button>
            </form>
            <p className="text-sm text-center text-gray-600">
                Don't have an account?{" "}
                <button
                    onClick={function(){
                    navigate("/register")
                }  }
                className="text-blue-500 hover:underline"
                >
                Sign up
                </button>
            </p>
            </div>
        </div>
        </>
}