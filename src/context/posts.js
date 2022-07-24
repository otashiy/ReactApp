import { useContext, useEffect, useState } from "react";
import App from "../App";
import { getRndInteger } from "../utils";

export const PostsContext = useContext();


const PostsProvider = (props) => {


    const [ posts, setPosts ] = useState();
    const [ loading, setLoading ] = useState(false);
   
    useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => {
    if (res.ok) {
    return res.json();
    }
    })
    .then(data => {
    setPosts(data.map(post => {
        return {
            ...post,
            date: new Date(`${getRndInteger(2001, 2023)}-${getRndInteger(1, 12)}-${getRndInteger(1, 28)}`).toString,
            share: getRndInteger(0, 100)
          }
    }))
    })
    .finally(setLoading(false))
    }, []);

    if(loading) {
        return <p>Loading...</p>
    }


    return (
<PostsContext.Provider value={{posts, setPosts}}>
{...props}
{children}
</PostsContext.Provider>
    )
};

export default PostsProvider