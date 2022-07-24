import { useContext } from "react";
import { PostsContext } from "../../contexts/posts";
import { Link, useParams } from "react-router-dom";
import "./posts.scss";
import Filter from "../../components/filter/filter";

const Posts = () => {

const { posts, setPosts } = useContext(PostsContext);


const handleDeleteBtn = () => {
const deletePostIndex = posts.findIndex(post => post.id ===  post.id)
const prevPost = posts.splice(0, deletePostIndex);
const nextPost = posts.splice(deletePostIndex, +1)

setPosts([
...prevPost,
...nextPost
])
}


    return (
<>
<h1>Posts</h1>
<Link className="posts__news-link" to={"/news"}>News</Link>
<Filter />
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
        <button onClick={handleDeleteBtn} className="posts__btn" type="button">Delete</button>
    </li>
    )
})}
</ul>
</>
    )
}

export default Posts;