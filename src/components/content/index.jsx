import React from "react";
import "./Content.scss";
import { Home } from "../../pages/Home";
import { Routes, Route, Switch, useParams } from "react-router-dom";
import axios from "axios";
import { Post } from "../../pages/Post";
import { CreatePost } from "../../pages/CreatePost";

export const Content = () => {
  const params = useParams();
  console.log(params);
  return (
    <div className="content">
      <div className="container-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/post/:id" element={<Post />}></Route>
          <Route path="/create-post" element={<CreatePost />}></Route>
        </Routes>
      </div>
    </div>
  );
};
