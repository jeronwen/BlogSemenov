import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router-dom";
import axios from "axios";

export const Post = () => {
  let postId = useParams();
  const [post, setPost] = React.useState("");
  const getPost = async () => {
    // console.log(`https://blog-api-semenov.herokuapp.com/posts/${postId.id}`);
    const resp = await axios.get(
      `https://blog-api-semenov.herokuapp.com/posts/${postId.id}`
    );
    if (resp.statusText === "OK") {
      setPost(resp.data);
      console.log(post);
    } else {
      console.log("Сервер не отвечает!");
      setPost("");
    }
  };

  useEffect(() => {
    getPost();
  }, [postId]);

  // const func = (id) => {
  //   console.log(id);
  // };

  return (
    <div className="full-post">
      <div>
        <img src="https://cs7.pikabu.ru/post_img/2019/01/30/9/1548860096115090477.jpg"></img>
        <h1>{post.title}</h1>
        <h3>{post.description}</h3>

        <br></br>
      </div>

      <span>{post.text}</span>
      <br></br>

      <div className="comments">
        <h2>Комментарии</h2>
        <div>
          <h3>Vasya Pupkin</h3>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor
            adipiscing leo id sed neque, diam nibh.
          </span>
          <br />
          <h3>Vasya Pupkin</h3>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor
            adipiscing leo id sed neque, diam nibh.
          </span>
          <br />
          <h3>Vasya Pupkin</h3>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor
            adipiscing leo id sed neque, diam nibh.
          </span>
          <br />
        </div>
        <br />
        <br />
        <div className="frm-send">
          <span>Добавить Комментарии</span>
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={4}
            sx={{ minWidth: 600 }}
          />
          <br />
          <Button className="btn-send" variant="contained">
            Отправить
          </Button>
        </div>
      </div>
    </div>
  );
};
