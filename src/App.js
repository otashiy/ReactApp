
import { Routes, Route } from "react-router-dom";
import Main from "./screens/main/main";
import Login from "./screens/login/login";
import News from "./screens/news/news";
import NotFound from "../src/screens/not-found/not-found";
import Posts from "./screens/posts/posts";
import PostsProvider from "./contexts/posts";
import LoginProvider from "./contexts/login";
import Post from "./screens/post/post";
import NewsProvider from "./contexts/news";


function App() {
  return (
<PostsProvider>
 <LoginProvider>
 <NewsProvider>
 <Routes>
  <Route path="/" element={<Main />} />
  <Route path="/login" element={<Login />} />
  <Route path="/posts" element={<Posts />} />
  <Route path="/post/:id" element={<Post />} />
  <Route path="/news" element={<News />} />
  <Route path="*" element={<NotFound />} />
  </Routes>
 </NewsProvider>
 </LoginProvider>
   </PostsProvider>
  );
}

export default App;
