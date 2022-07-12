import React, { useEffect } from "react";
import "./App.scss";
import { Nav } from "./components/nav";
import { Content } from "./components/content";
import { Item } from "./components/content/items";
import { Header } from "./components/header";
import { useSelector, useDispatch } from "react-redux";
import { login } from "./redux/actions/globalSettings";
import { fetchItems, fetchUsersItems } from "./redux/actions/items.js";
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
  const stateActiveItems = useSelector(
    (state) => state.globalSettings.activeItems
  );
  const stateTotalItems = useSelector((state) => state.items.total);
  const stateItems = useSelector((state) => state.items.items);

  return (
    <div className="App">
      {/* <Routes>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes> */}
      <div className="container">
        <Header></Header>
        <Content
          items={stateItems}
          TotalItems={stateTotalItems}
          ActiveItems={stateActiveItems}
        />
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
