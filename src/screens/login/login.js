import { useContext, useRef, useState } from "react"
import { LoginContext } from "../../contexts/login";
import { useNavigate } from "react-router-dom";

const Login = () => {

const textRef = useRef();
const passwordRef = useRef();

const { setToken } = useContext(LoginContext);
const [ error, setError ] = useState();

const navigate = useNavigate();

const handleLoginSubmit = (evt) => {
evt.preventDefault();

let textValue = textRef.current.value;
let passwordValue = passwordRef.current.value;

if (textValue === "Administrator" && passwordValue === "12345") {
setToken(true);
navigate("/posts");
}
else if (!textValue || passwordValue) {
setError("Check your password!")
}

}

    return (
        <form onSubmit={handleLoginSubmit}>
            <input ref={textRef} type="text" placeholder="Login" aria-label="text" />
            <input ref={passwordRef} type="password" placeholder="Password" aria-label="password" />
            <button type="submit">Submit</button>
            <p>{error}</p>
        </form>
    )
}

export default Login;