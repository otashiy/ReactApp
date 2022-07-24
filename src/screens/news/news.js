import { useContext } from "react";
import { NewsContext } from "../../contexts/news";

const News = () => {

const { news } = useContext(NewsContext);

    return (
    <>
    <h1>News page!</h1>
    <ul>
   {news.map(neew => {
    return (
    <li>
        <h2>{neew.title}</h2>
        <p>{neew.author}</p>
        <br />
        <span>{neew.status}</span>
        <br />
        <time>
        {neew.date}
        </time>
        <br />
        <strong>
            {neew.likes}
        </strong>
        <b>
            {neew.type}
        </b>
    </li>
    )
   })}
    </ul>
    </>
    )
};

export default News;