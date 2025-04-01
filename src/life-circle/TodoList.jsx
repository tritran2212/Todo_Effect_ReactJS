import { useState, useEffect,  useRef } from "react";
import { Fragment } from "react";
const BASE_URL = "https://67e766be6530dbd3111326d4.mockapi.io";
import { Loading } from "./Loading";


export function TodoList() {
    const [inputTodo, setInputTodo] = useState("");
    const [listTodo, setListTodo] = useState([]);
    //fetching, success, fail,idle
    const [fetchStatus, setFetchStatus] = useState("idle");

    

    const [todoEdit , setTodoEidt] = useState(null)
    // tao 1 biến trỏ element
    const inputRef = useRef()

    const listCompleteTodo = listTodo.filter((todo) => todo.completed);
    const listPendingTodo = listTodo.filter((todo) => !todo.completed);
    console.log({
        listCompleteTodo,
        listPendingTodo
    }

    )

    const handleChangeInputTodo = (event) => {
        setInputTodo(event.target.value)
    }

    const handleAddTodo = () => {
        
           setFetchStatus("Fetthing");
        fetch(`${BASE_URL}/todos`, {
            method: "POST",
            body: JSON.stringify({
                name: inputTodo,
                completed: false,


            }),
            headers: {
                "Content-Type": "application/json",
            }
        }).then((response) => {
            if (response.ok) {
                setFetchStatus("success");
                setInputTodo("");
                // focus Ô inout sau khi thêm 
                inputRef.current.focus();
                getListTodo();
            }
            else {
                setFetchStatus("fail");
            }
        });
    }
    const handleDeleteTodo = (id) => {
        fetch(`${BASE_URL}/todos/${id}`, {
            method: "DELETE",
        }).then((response) => {
            if (response.ok) {
                alert("XÓA THÀNH CÔNG")
                getListTodo();
            }
            else {
                alert("XÓA THẤT BẠI !!!!")
            }
        })
    }
    const getListTodo = () => {
        fetch(`${BASE_URL}/todos`).then((r) => {
            if (r.ok) {
                return r.json()
            }
            throw ("get todos error")
        }).then((r) => {
            setListTodo(r);
        })
            .catch((error) => {
                console.log("error", error)
            })
    }
    const handleCompleteTodo = (id) => {
        setFetchStatus("Fetthing");
        fetch(`${BASE_URL}/todos/${id}`, {
            method: "put",
            body: JSON.stringify({
                completed: true,
            }),
            headers: {
                "Content-Type": "application/json",
            }
        }).then((response) => {
            if (response.ok) {
                setFetchStatus("success");
                getListTodo();
            } else {
                setFetchStatus("fail");
                alert("update error")
            }
        })
    }
    const handlePandingTodo = (id) => {
        setFetchStatus("Fetthing");
        fetch(`${BASE_URL}/todos/${id}`, {
            method: "put",
            body: JSON.stringify({
                completed: false,
            }),
            headers: {
                "Content-Type": "application/json",
            }
        }).then((response) => {
            if (response.ok) {
                setFetchStatus("success");
                getListTodo();
            } else {
                setFetchStatus("fail");
                alert("update error")
            }
        })
    }
    const handleEditTodo = (todo)=>{
        setInputTodo(todo.name);
        setTodoEidt(todo);
    }
    const handleUpdateTodo =()=>{
            setFetchStatus("Fetthing");
            fetch(`${BASE_URL}/todos/${todoEdit.id}`, {
                method: "PUT",
                body: JSON.stringify({
                    name: inputTodo,
                   
                }),
                headers:{
                    "Content-Type": "application/json",
                }
            }).then((r)=>{
                if(r.ok){
                    setFetchStatus("success");
                    setTodoEidt(null);
                    setInputTodo("");
                     getListTodo();
                   // const cloneListTodo = JSON.parse(JSON.stringify(listTodo));
                    
                }else{
                    setFetchStatus("fail");
                }
            })
    }
    useEffect(() => {
        getListTodo();
    }, [])

    useEffect(()=>{
        console.log("inputTodo", inputRef);
    },[])
    return (
        <>

            {
                fetchStatus === "Fetthing" && (
                    <div className="absolute inset-0  bg-[#8080805d] ">
                        <Loading />
                    </div>
                )
            }

            <div className="p-6 bg-gray-100 min-h-screen">
                <h1 className="text-3xl font-bold text-center mb-6">Todo List</h1>
                <div className="flex justify-center mb-6">
                    <input
                        type="text"
                        className="border border-gray-300 rounded-lg p-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Add a new task"
                        // 1 chiều 
                        value={inputTodo}
                        //chiều 2 
                        onChange={handleChangeInputTodo}
                        ref={inputRef}
                    />
                    <button onClick={todoEdit?handleUpdateTodo:handleAddTodo} className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                       {todoEdit?"Update":"Add"}
                    </button>
                </div>

                {/* .map neu mang rong thi no se khong duyet qua phan tu nao het 
                 -khong loi*/
                }
                <div className="space-y-6">
                    <div className="todo bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4 ">Pending Tasks</h2>
                        {listPendingTodo.map((todo) => {
                            return (
                                <Fragment key={todo.id}>
                                    <div onClick={()=>{
                                        handleEditTodo(todo);
                                    }}  className="todo-item flex justify-between items-center">
                                        <p className="text-gray-800">
                                            {todo.name}
                                        </p>
                                        <div className="space-x-2">
                                            <button onClick={() => {
                                                handleCompleteTodo(todo.id)
                                            }} className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600">
                                                Complete
                                            </button>
                                            <button onClick={() => {
                                                handleDeleteTodo(todo.id)
                                            }} className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600">
                                                Delete
                                            </button>
                                        </div>
                                    </div>

                                </Fragment>
                            );
                        })}
                    </div>
                    <div className="complete bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Completed Tasks</h2>
                        {listCompleteTodo.map((todo) => (
                            <Fragment key={todo.id}>
                                <div className="todo-item flex justify-between items-center">
                                    <p className="line-through text-gray-500">
                                        {todo.name}
                                    </p>
                                    <div className="space-x-2">
                                        <button onClick={()=>{
                                            handlePandingTodo(todo.id);
                                        }} className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600">
                                            Todo
                                        </button>
                                        {/*  onClick  chỉ muốn nhận vào 1 function */}
                                        <button onClick={() => {
                                            handleDeleteTodo(todo.id)
                                        }} className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600">
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}