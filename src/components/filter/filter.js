import { useContext, useRef } from "react";
import { PostsContext } from "../../contexts/posts";

const Filter = () => {
const searchRef = useRef();
const { posts, setPosts } = useContext(PostsContext);

const handleFiltredSubmit = (evt) => {
evt.preventDefault();
const searchValue = searchRef.current.value;

if (searchValue) {

const postsFiltred = posts.filter(post => post.title.includes(searchValue))
setPosts(postsFiltred);
}

}

    return (
        <form onSubmit={handleFiltredSubmit} method="get">
        <input ref={searchRef} type="search" aria-label="search" placeholder="Search" />
        <button type="submit">Search</button>
        </form>
    )
}

export default Filter;