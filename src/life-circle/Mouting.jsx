import { useEffect, useState } from "react"
import cx from "classnames"

// https:// jsonplaceholder.typicode.com/todos?_limit=10
export  function Mounting(){
        const [todos, setTodos] = useState([])
        const [statusNetWork, setStatusNetWork] =useState("online");

        const handleGetTodos = ()=>{
            fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
            .then((response)=>{
                if(response.ok){
                    return response.json();
                }

                throw  " get todo error"
            }).then((response)=>{
                console.log(response);
                setTodos(response);
            }).catch((error)=>{
                console.log("error",error);
            })
           
        }
        // mới vừa vào useEffect load thông tin  
        useEffect(()=>{
            handleGetTodos();
        },[])

        useEffect(()=>{
            window.addEventListener("online",()=>{
                setStatusNetWork("offline");
            })
            window.addEventListener("offline",()=>{
                setStatusNetWork("online");
            })
        },[])



    return (
        <>
        <p>status:{statusNetWork}</p>
        <button onClick ={handleGetTodos} 
        className="px-8 py-4 border rounded cursor-pointer ">
            get todo
        </button>
        {
            todos.length > 0 &&
                todos.map((todo)=>{
                    return <p key={todo.id} className={cx({"line-through": todo.completed,})}>{todo.title}</p>
            })
           }

          </>
    )
}