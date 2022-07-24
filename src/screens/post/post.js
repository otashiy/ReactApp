import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PostsContext } from "../../contexts/posts";

const Post = () => {

const { id } = useParams();
const { posts } = useContext(PostsContext);

const currentPost = posts.find(post => {
    return post.id === +id
})

    return (
    <>
    <h1>Post</h1>
    <article>
    <h2>{currentPost.title}</h2>
    <time>{currentPost.date}</time>
    <br />
    <span>{currentPost.share}</span>
    </article>
    </>
    )
}

export default Post;