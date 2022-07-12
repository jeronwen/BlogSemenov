import { useParams } from "react-router-dom";
import React from "react";

export const Home = () => {
  let params = useParams("/");

  return (
    <>
      <h1 className="main-title">Nikita Semenov</h1>
      <h2 className="second-title">Блог разработчика</h2>
      <img
        className="img-content"
        src="https://i.ytimg.com/vi/BdNW5cVpW1g/maxresdefault.jpg"
      />
      <h3>Обо мне</h3>
      <span className="item-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
        scelerisque diam arcu risus. Imperdiet dolor, porttitor pellentesque
        fringilla aliquet sit. Turpis arcu vitae quis nunc suscipit. Mattis
        scelerisque leo curabitur faucibus. Nec, sed porta ac enim. Mattis quam
        accumsan ipsum commodo sed purus mi. Platea sit lectus neque, nulla
        sapien vitae nulla. Nisl viverra viverra quis mattis tincidunt laoreet
        amet, laoreet proin. Duis mi, aliquam tincidunt amet phasellus malesuada
        non nisi.
      </span>
    </>
  );
};
