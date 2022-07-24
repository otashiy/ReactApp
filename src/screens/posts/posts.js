import { useContext } from "react";
import { PostsContext } from "../../contexts/posts";
import { Link } from "react-router-dom";
import "./posts.scss";

const Posts = () => {

const { posts } = useContext(PostsContext);



    return (
<>
<h1>Posts</h1>
<Link to={"/news"}>News</Link>
<ul>
{posts.map(post => {
    return (
    <li className="posts__item" key={post.id}>
    <div className="posts__wrapper">
    <h2>
        <Link className="posts__link" to={`/post/${post.id}`}>{post.title}</Link>
    </h2>
        <time className="posts__date">{post.date}</time>
        <br></br>
        <span className="posts__share">{post.share}</span>
    </div>
        <button className="posts__btn" type="button">Delete</button>
    </li>
    )
})}
</ul>
</>
    )
}

export default Posts;