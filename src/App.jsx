import React, { useEffect } from "react";
import "./App.scss";
import { Nav } from "./components/nav";
import { Content } from "./components/content";
import { Item } from "./components/content/items";
import { Header } from "./components/header";
import { useSelector, useDispatch } from "react-redux";
import { login } from "./redux/actions/globalSettings";
import { setItems, fetchItems } from "./redux/actions/items.js";
import { Profile } from "./components/content/pages/Profile";
import { Routes, Route, Switch, useParams } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  // const id = useParams();
  // const stateItems = useSelector((state) => state.items);
  // useEffect(() => {
  //   dispatch(fetchItems());
  //   if (localStorage.getItem("token")) {
  //     dispatch(login());
  //   }
  // }, []);
  React.useEffect(() => {
    dispatch(fetchItems());
    if (localStorage.getItem("token")) {
      dispatch(login());
    }
  }, []);
  return (
    <div className="App">
      {/* <Routes>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes> */}
      <div className="container">
        <Header></Header>
        <Content />
      </div>

      {/* <div className="items">
        <Header></Header>
        {stateItems.map((data) => {
          return <Item key={data._id} data={data}></Item>;
        })}
      </div> */}
      <Nav></Nav>
    </div>
  );
}

export default App;
