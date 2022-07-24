import { useContext, useRef } from "react"
import { LoginContext } from "../../context/login";
import { useNavigate } from "react-router-dom";

const Login = () => {

const textRef = useRef();
const passwordRef = useRef();

const { setToken } = useContext(LoginContext);

const navigate = useNavigate();

const handleLoginSubmit = (evt) => {
evt.preventDefault();

const textValue = textRef.current.value;
const passwordValue = passwordRef.current.value;

if (textValue && passwordValue) {
setToken(true);
navigate("/posts");
};

}

    return (
        <form onSubmit={handleLoginSubmit}>
            <input ref={textRef} type="text" placeholder="Login" aria-label="text" />
            <input ref={passwordRef} type="password" placeholder="Password" aria-label="password" />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Login;