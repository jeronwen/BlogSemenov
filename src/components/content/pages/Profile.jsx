import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { Item } from "../items";
import {
  deactivateItems,
  activateItems,
  fetchProfileInfo,
} from "../../../redux/actions/globalSettings";
import { fetchUsersItems, fetchItems } from "../../../redux/actions/items";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

export const Profile = ({ setActiveItems }) => {
  const stateProfileName = useSelector(
    (state) => state.globalSettings.fullName
  );
  const stateProfileCreatedAt = useSelector(
    (state) => state.globalSettings.createdAt
  );
  // let location = useLocation();
  // console.log(location);
  let userId = useParams();
  const dispatch = useDispatch();

  const [userItems, setUserItems] = React.useState([]);
  // const stateItems = useSelector((state) => state.items.items);
  const getProfilePosts = async () => {
    try {
      const resp = await axios.get(
        `https://blog-api-semenov.herokuapp.com/posts?userId=${userId.id}&limit=20000`
      );
      if (resp.statusText === "OK") {
        setUserItems(resp.data.items);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    dispatch(deactivateItems());

    getProfilePosts();

    return () => {
      dispatch(fetchItems());
      dispatch(activateItems());
    };
  }, []);
  return (
    <div className="profile">
      <div className="info">
        <h1>{stateProfileName}</h1>
        <h3>дата регистрации: {stateProfileCreatedAt} </h3>
      </div>
      <div className="items">
        {userItems.map((data) => {
          return <Item key={data._id} data={data}></Item>;
        })}
      </div>
    </div>
  );
};
