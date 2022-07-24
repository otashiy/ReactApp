import { createContext, useEffect, useState } from "react";
import { types } from "../consts";
import { getRndInteger } from "../utils";

export const NewsContext = createContext();


const NewsProvider = ({children}) => {


    const [ news, setNews ] = useState();
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
    setNews(data.map(neew => {
        return {
            ...neew,
            date: new Date(`${getRndInteger(2001, 2023)}-${getRndInteger(1, 12)}-${getRndInteger(1, 28)}`).toString(),
            likes: getRndInteger(0, 100),
            type: types[getRndInteger(0, 8)] 
          }
    }))
    })
    .finally(setLoading(false))
    }, []);

   if (!news) {
    return null;
   }
   else if (loading) {
    return <p>Loading...</p>
   }
    


    return (
<NewsContext.Provider value={{news, setNews}}>
{children}
</NewsContext.Provider>
    )
};

export default NewsProvider;