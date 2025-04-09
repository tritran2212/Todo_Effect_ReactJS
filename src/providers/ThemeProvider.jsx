import { createContext, useContext, useState } from "react"

export const ThemeContext = createContext();
// custom hook sử dụng hook trong functional
export const useThemeContext =()=>{
    const value = useContext(ThemeContext);
    return value;
}
export function ThemeProvider(props) {

    const  [theme,setTheme] = useState("dark");

    const value ={
        theme,
        setTheme,
    }
    console.log("value", value)
    return (
        <>
            <ThemeContext.Provider value={value}>
                {props.children}
            </ThemeContext.Provider>
        </>
    )
}
