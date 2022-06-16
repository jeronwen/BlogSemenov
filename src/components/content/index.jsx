import "./Content.scss";
import { Home } from "../../pages/Home";
import { Routes, Route, Link } from "react-router-dom";

export const Content = () => {
  return (
    <div className="content">
      <div className="container-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </div>
  );
};
