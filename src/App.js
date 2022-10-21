import "./App.css";
import Home from "./components/pages/Home";
import Feed from "./components/pages/Feed";
import Users from "./components/pages/Users";
import UserPostForm from "./components/pages/UserPostForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/login.css";
import "./styles/feed.css";
import "./styles/profile.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/new" element={<UserPostForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
