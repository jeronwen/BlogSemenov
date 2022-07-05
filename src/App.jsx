import React, { useEffect } from "react";
import "./App.scss";
import { Nav } from "./components/nav";
import { Content } from "./components/content";
import { Item } from "./components/items";
import { Header } from "./components/header";
import { useSelector, useDispatch } from "react-redux";
import { login } from "./redux/actions/globalSettings";
import { setItems, fetchItems } from "./redux/actions/items";

function App() {
  const dispatch = useDispatch();
  const stateItems = useSelector((state) => state.items);
  useEffect(() => {
    dispatch(fetchItems());
    if (localStorage.getItem("token")) {
      dispatch(login());
    }
  }, []);

  return (
    <div className="App">
      <Content />
      <div className="wrapper">
        <Header></Header>

        {stateItems.map((data) => {
          return <Item key={data._id} data={data}></Item>;
        })}
      </div>
      <Nav></Nav>
    </div>
  );
}

export default App;
