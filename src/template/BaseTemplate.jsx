
import { Outlet,Link,NavLink } from "react-router"
// destructuring 

export function BaseTemplate(){
    return (
        <>
            <header className="bg-blue-600 text-white p-4 shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Header Facebook</h1>
                    <nav className="flex space-x-6">
                        <NavLink style={(props)=>{
                            return{
                                color: props.isActive ? 'red' : 'white',
                            }
                        }} to="/watch" className="hover:underline text-lg active">Watch</NavLink>

                        <NavLink className={(props)=>{
                            return props.isActive ? 'text-red-500' : 'text-white'
                        }} to="/marketplace" >Marketplace</NavLink>


                        <Link to="/group/feed" className="hover:underline text-lg">Group</Link>
                    </nav>
                </div>
            </header>
            {/* {
                children
            } */}
            {/* điền vị trí của  route con trong  template dùng chung */}
            <Outlet/>
            <footer className="bg-gray-800 text-white p-4 mt-8">
                <div className="container mx-auto text-center">
                    Footer Facebook
                </div>
            </footer>
        </>
    )
}