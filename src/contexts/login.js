import { useState, useEffect, createContext } from "react";


export const LoginContext = createContext();

const LoginProvider = ({children}) => {

const [ token, setToken ] = useState(localStorage.getItem("token"));
    

useEffect(() => {
    
    if (token) {
    localStorage.setItem("token", token)
    }
}, [token]);

    return (
<LoginContext.Provider value={{token, setToken}}>
{children}
</LoginContext.Provider>
    )
}

export default LoginProvider;