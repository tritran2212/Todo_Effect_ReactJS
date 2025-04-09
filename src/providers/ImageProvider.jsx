

//Template  dùng cho global  state
// 
import { createContext, useContext, useState } from "react"
 export const ImageContext = createContext();

  export const useImageContext =()=>{
    const value = useContext(ImageContext);
    return value;
  }

  export function ImageProvider(props) {

    const  [image,setImage] = useState("https://i.pravatar.cc/?=1");
    const value ={
        image,
        setImage,
    }
    console.log("value", value)
    return (
        <>
        {/* boc toan bo con text  provider cho toan bo app */}
            <ImageContext.Provider value={value}>
                {props.children}
            </ImageContext.Provider>
        </>
    )
  }


