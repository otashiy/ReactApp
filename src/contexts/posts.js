import { createContext, useEffect, useState } from "react";

import { getRndInteger } from "../utils";

export const PostsContext = createContext();


const PostsProvider = ({children}) => {


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
            date: new Date(`${getRndInteger(2001, 2023)}-${getRndInteger(1, 12)}-${getRndInteger(1, 28)}`).toString(),
            share: getRndInteger(0, 100)
          }
    }))
    })
    .finally(setLoading(false))
    }, []);

   if (!posts) {
    return null;
   }
   else if (loading) {
    return <p>Loading...</p>
   }
    


    return (
<PostsContext.Provider value={{posts, setPosts}}>
{children}
</PostsContext.Provider>
    )
};

export default PostsProvider