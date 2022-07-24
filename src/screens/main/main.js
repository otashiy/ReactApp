import { Link } from "react-router-dom";

const Main = () => {
    return (
        <>
        <h1>Main page!</h1>
        <Link to={"/login"}>Login in</Link>
        </>
    )
}

export default Main;