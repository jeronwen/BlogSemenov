import React from "react";
import "./Content.scss";
import { Home } from "./pages/Home";
import { Routes, Route, Switch, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Item } from "./items";
import { FullPost } from "./pages/FullPost";
import { CreatePost } from "./pages/CreatePost";
import { EditPost } from "./pages/EditPost";
import { Profile } from "./pages/Profile";
import { setItems, fetchItems } from "../..//redux/actions/items.js";
import { login } from "../..//redux/actions/globalSettings.js";

export const Content = () => {
  const dispatch = useDispatch();
  // const [activeItems, setActiveItems] = React.useState(true);
  const activeItems = useSelector((state) => state.globalSettings.activeItems);
  const stateItems = useSelector((state) => state.items);

  // React.useEffect(() => {
  //   console.log("hey");
  // });
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
      <div className={activeItems ? "items" : "items-hide"}>
        {/* <Header></Header> */}
        {stateItems.map((data) => {
          return <Item key={data._id} data={data}></Item>;
        })}
      </div>
    </div>
  );
};
