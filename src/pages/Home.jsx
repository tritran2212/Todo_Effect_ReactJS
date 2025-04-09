import { useContext } from 'react';
import { ThemeContext } from '../providers/ThemeProvider.jsx';

export function Home(){
    const value = useContext(ThemeContext);
    console.log("value", value);
    console.log("value.theme", value.theme);
    // console.log("value.theme", value.theme);

    return (
        <>  
        <h1 className={
            value.theme === "dark" ? "text-white bg-black" : "text-black bg-white"
        }>
            home
        </h1>
        
        </>
    )

}