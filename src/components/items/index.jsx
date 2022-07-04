import { Link } from "react-router-dom";
import React from "react";
import "./Items.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export const Item = ({ data }) => {
  const handleClick = () => {
    console.log("hey");
  };
  return (
    <div className="item-card">
      {/* <Card sx={{ minHeight: 225 }}>
        
          <CardActionArea sx={{ minHeight: 225 }}>
          <Link to={"/post"}>

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data.text}
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                {data.createdAt}
              </Typography>
            </CardContent>
            </Link>
          </CardActionArea>

      </Card> */}

      <div className="item">
        <Link to={`/post/${data._id}`}>
          <h1>{data.title}</h1>{" "}
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
