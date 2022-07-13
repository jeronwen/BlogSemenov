import React, { useEffect } from "react";
import "./App.scss";
import { Nav } from "./components/nav";
import { Content } from "./components/content";
import { Header } from "./components/header";
import { useSelector, useDispatch } from "react-redux";
import { login, fetchProfileInfo } from "./redux/actions/globalSettings";
import { fetchItems, fetchUsersItems } from "./redux/actions/items.js";

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
      dispatch(fetchProfileInfo(localStorage.getItem("id")));
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
