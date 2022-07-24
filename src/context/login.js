import { useContext } from "react";

export const LoginContext = useContext();

const LoginProvider = () => {

const [ token, setToken ] = useState(localStorage.getItem("token"));
    

useEffect(() => {
    
    if (token) {
    localStorage.setItem("token", token)
    }
}, [token]);

    return (
<LoginContext.Provider value={{token, setToken}} />
    )
}

export default LoginProvider;