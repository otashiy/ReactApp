
const Posts = ({ post }) => {

    return (
<>
<h1>Posts</h1>
<article>
<h2>{post.title}</h2>
<span>{post.share}</span>
<time>{post.date}</time>
</article>
</>
    )
}

export default Posts;