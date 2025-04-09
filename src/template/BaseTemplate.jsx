import {useContext} from "react"
import { Outlet,Link,NavLink } from "react-router"
import { ThemeContext } from "../providers/ThemeProvider"
import  cn from "classnames"
// destructuring 

export function BaseTemplate(){
        const {theme,setTheme} = useContext(ThemeContext);
    return (
        <>
            <header className="bg-blue-600 text-white p-4 shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <h1 className="text-2xl font-bold">Header Facebook</h1>
                        <button
                            onClick={() => {
                                setTheme(theme === "dark" ? "light" : "dark");
                            }}
                            className="bg-white text-blue-600 px-4 py-2 rounded shadow hover:bg-gray-100 transition"
                        >
                            Toggle Theme
                        </button>
                    </div>
                    <nav className="flex space-x-6">
                        <NavLink
                            style={(props) => ({
                                color: props.isActive ? 'red' : 'white',
                            })}
                            to="/watch"
                            className="hover:underline text-lg"
                        >
                            Watch
                        </NavLink>
                        <NavLink
                            className={(props) =>
                                props.isActive
                                    ? 'text-red-500 font-semibold'
                                    : 'text-white hover:underline'
                            }
                            to="/marketplace"
                        >
                            Marketplace
                        </NavLink>
                        <Link
                            to="/group/feed"
                            className="hover:underline text-lg text-white"
                        >
                            Group
                        </Link>
                    </nav>
                </div>
            </header>
            <main className="container mx-auto py-6">
                <Outlet />
            </main>
            <footer
                className={cn(
                    "text-white p-4 text-center",
                    theme === "dark" ? "bg-black" : "bg-gray-200 text-gray-800"
                )}
            >
                Footer
            </footer>
        </>
    );
}