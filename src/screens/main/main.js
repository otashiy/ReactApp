import { Link } from "react-router-dom";
import "./main.scss";

const Main = () => {
    return (
        <>
        <h1>Main page!</h1>
        <Link className="main__link" to={"/login"}>Login in</Link>
        </>
    )
}

export default Main;