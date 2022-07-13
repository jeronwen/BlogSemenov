import { Link } from "react-router-dom";
import { React } from "react";
import { useDispatch } from "react-redux";
import "./Item.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export const Item = ({ data }) => {
  return (
    <div className="item-card">
      <div className="item">
        <Link to={`/post/${data._id}`}>
          <h1>{data.title}</h1>
        </Link>
        <div>
          <span>{data.description}</span>
        </div>
        <br />
        <br />
        <span>{data.createdAt}</span>
      </div>
    </div>
  );
};
