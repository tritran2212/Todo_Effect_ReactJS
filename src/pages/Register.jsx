import { useState,useContext } from "react"
import { UserLoginContext } from "../App"

//cách lấy thuộc tính Object thông qua dấu ngoặc []  touches[name]
function Error ({touchs, errors,name}){
    const value = useContext(UserLoginContext)
    console.log("value", value)
    return (

        <>
                {touchs[name] && errors[name] && (
                    <span className="text-red-500">{errors[name]}</span>
                )}
        
        </>
    )
}
export  function Register(){
     const [values , setValues]=useState({
        username: "",
        phone: "",
        email: "",
        password:"",
        gender:"",
        city:1
     })
     const [errors , setErrors]=useState({
        username: "",
        phone: "",
        email: "",
        password:"",
        gender:"",
        city:""
     })
     const [touches, setTouch]=useState({
        username: false,
        phone: false,
        email: false,
        password:false,
        gender:false,
        city:false
     })
     console.log("touches", touches)

     const handleChange = (event) => {
        const element = event.target;

        const {name, value} = element;
        // kiểm tra khi nhập vào giá trị
        console.log(
            value,
            name
        )
        // cập nhật giá trị

        setValues({
            ...values,
            [name]: value 
        })
     }

     const handleBlur = (event)=>{
        const element = event.target;
        // lấy thuộc tính name của element
        // const name = element.getAttribute("name")
        const {name} = element;

        setTouch({
            ...touches,
            [name]: true
        })
        handelValidate(values[name],name)
     }
     const handelValidate = (value, name) => {
            let error = "";

        switch(name) {
            case "username": {
                if (value.trim().length === 0) {
                    error = "Không được bỏ trống";
                } else if (value.trim().length < 6) { 
                    error = "Không được ít hơn 6 ký tự";
                } else if (value.trim().length > 50) {
                    error = "Không được nhiều hơn 50 ký tự";
                }
                break;
            }
            case "email": {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!value.trim()) {
                    error = "Không được để trống email";
                } else if (!emailRegex.test(value)) {
                    error = "Email không hợp lệ";
                }
                break;
            }
        }
        setErrors({
            ...errors,
            [name]: error
        })

     }
const handleSubmit = (event)=>{
    event.preventDefault();
    // object thanh array
    // const  touchArr = Object.entries(touches);
    // console.log(touchArr)
    // lấy tất cả giá trị của  touches chuyển chúng thành 1 mảng 
    const  touchArr = Object.values(touches);
    const isAllTouches = touchArr.every((item) => item === true);
    if(isAllTouches===false){
        return ;
    }
    const errorArr = Object.values(errors);
    const isAllErrors = errorArr.every((item) => item.length === 0);
    if(isAllErrors===false){
        return ;
    }
}
    return (
        <>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-6">Register</h1>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                <div className="mb-4">
                    
                    <label htmlFor="username" className="block text-gray-700 font-medium mb-2">Username</label>
                    <input onBlur={handleBlur} onChange={handleChange} value={values.username} name="username" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <Error touchs={touches} errors={errors} name={"username"} />
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
                    <input onBlur={handleBlur} onChange={handleChange} value={values.phone} name="phone" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <Error touchs={touches} errors={errors} name={"phone"} />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input  onBlur={handleBlur} onChange={handleChange} value={values.email} name="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <Error touchs={touches} errors={errors} name={"email"}/>
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                    <input onBlur={handleBlur} onChange={handleChange} value={values.password} name="password" type="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <Error touchs={touches} errors={errors} name={"password"}/>
                </div>
                <div className="mb-4">
                    <p className="text-gray-700 font-medium mb-2">Gender</p>
                    <div className="flex items-center space-x-4">
                        <label className="flex items-center">
                            <input onBlur={handleBlur}  onChange={handleChange} checked ={values.gender==="male"} type="radio" name="gender" value="male" className="mr-2" />
                            Male
                        </label>
                        <label className="flex items-center">
                            <input onBlur={handleBlur} onChange={handleChange} checked={values.gender==="female"} type="radio" name="gender" value="female" className="mr-2" />
                            Female
                        </label>
                        <Error touchs={touches} errors={errors} name={"gender"}/>
                    </div>
                </div>
                <div className="mb-4">
                    <p className="text-gray-700 font-medium mb-2">City</p>
                    <select onBlur={handleBlur} onChange={handleChange} value={values.city} name="city" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value={0}>Da Nang</option>
                        <option value={1}>Hue</option>
                        <option value={2}>Ha Noi</option>
                    </select>
                    <Error touchs={touches} errors={errors} name={"city"}/>
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Register
                </button>
            </form>
        </div>
        </>
    )
}