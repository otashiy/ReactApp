import PostsProvider from "./context/posts";
import { Routes, Route } from "react-router-dom";
import Main from "./screens/main/main";
import Login from "./screens/login/login";
import News from "./screens/news/news";
import NotFound from "./screens/not-found/not-found";
import Posts from "./screens/posts/posts";
import LoginProvider from "./context/login";

function App() {
  return (
   <PostsProvider>
 <LoginProvider>
 <Routes>
  <Route path="/" element={<Main />} />
  <Route path="/login" element={<Login />} />
  <Route path="/posts" element={<Posts />} />
  <Route path="/news" element={<News />} />
  <Route path="*" element={<NotFound />} />
  </Routes>
 </LoginProvider>
   </PostsProvider>
  );
}

export default App;
