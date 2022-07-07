import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { Item } from "../items";

export const Profile = () => {
  const [data, setData] = React.useState({});
  const getProfilePosts = async () => {
    // console.log(`https://blog-api-semenov.herokuapp.com/posts/${postId.id}`);
    try {
      const resp = await axios.get(
        `https://blog-api-semenov.herokuapp.com/posts?userId=${"62b9b7dd1458063d97e24ee5"}&limit=20000`
      );
      if (resp.statusText === "OK") {
        console.log(resp.data);
        setData(resp.data);
      } else {
        console.log("Сервер не отвечает!");
        setData("");
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProfilePosts();
  }, []);
  return (
    <div className="profile">
      <div className="info">
        <h1>Имя профиля</h1>
        <h3>дата регистрации: 00 00 00 </h3>
      </div>
      <div className="items">{/* <Item></Item> */}</div>
      <div></div>
    </div>
  );
};
