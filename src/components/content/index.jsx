import "./Content.scss";
import { Home } from "../../pages/Home";
import { Routes, Route, Switch } from "react-router-dom";
import { Post } from "../../pages/Post";

export const Content = () => {
  return (
    <div className="content">
      <div className="container-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/post" element={<Post />}></Route>
        </Routes>
      </div>
    </div>
  );
};
