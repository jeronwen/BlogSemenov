import React from "react";
import "./App.scss";
import { Nav } from "./components/nav";
import { Content } from "./components/content";
import { Item } from "./components/items";
import { Header } from "./components/header";
import { useSelector, useDispatch } from "react-redux";

import { setItems } from "./redux/actions/items";

function App() {
  const dispatch = useDispatch();
  const stateItems = useSelector((state) => state);
  // React.useEffect(() => {
  //   dispatch(setItems());
  // }, []);
  return (
    <div className="App">
      <Content />
      <div className="wrapper">
        <Header></Header>

        {stateItems.map((data) => {
          return <Item data={data}></Item>;
        })}
      </div>
      <Nav></Nav>
    </div>
  );
}

export default App;
