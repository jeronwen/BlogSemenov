import React, { useState } from "react";
import "./Content.scss";
import { Home } from "./pages/Home";
import { Routes, Route, Switch, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Item } from "./items";
import { FullPost } from "./pages/FullPost";
import { CreatePost } from "./pages/CreatePost";
import { EditPost } from "./pages/EditPost";
import { Profile } from "./pages/Profile";
import Pagination from "@mui/material/Pagination";
import {
  setItems,
  fetchItems,
  fetchPageItems,
} from "../..//redux/actions/items.js";
import { login } from "../..//redux/actions/globalSettings.js";

export const Content = ({ items, TotalItems, ActiveItems }) => {
  const dispatch = useDispatch();

  // const [activeItems, setActiveItems] = React.useState(true);

  // React.useEffect(() => {
  //   console.log("hey");
  // });

  const [pageNumber, setPageNumber] = useState(1);
  const handleChangePage = (e, page) => {
    // console.log(page);
    dispatch(fetchPageItems(page));
    setPageNumber(page);
  };

  return (
    <div className="content">
      <div className="container-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/post/:id" element={<FullPost />}></Route>
          <Route path="/create-post" element={<CreatePost />}></Route>
          <Route path="/post/edit/:id" element={<EditPost />}></Route>
          <Route path="/profile/:id" element={<Profile />}></Route>
        </Routes>
      </div>
      <div className={ActiveItems ? "items" : "items-hide"}>
        {/* <Header></Header> */}
        {items.map((data) => {
          return <Item key={data._id} data={data}></Item>;
        })}
        <Pagination
          className="items-pagination"
          count={Math.ceil(TotalItems / 5)}
          page={pageNumber}
          color="primary"
          onChange={handleChangePage}
        ></Pagination>
      </div>
    </div>
  );
};
