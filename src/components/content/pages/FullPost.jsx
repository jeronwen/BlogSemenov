import React, { useEffect } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Comment } from "../comment";
import axios from "axios";

export const FullPost = () => {
  let postId = useParams();

  const [post, setPost] = React.useState("");
  const [commentsData, setCommentsData] = React.useState([]);
  const [commentText, setCommentText] = React.useState("");
  const [author, setAuthor] = React.useState("");
  useEffect(() => {
    getFullPost();
  }, [postId]);
  const getFullPost = async () => {
    try {
      let reqPost = `https://blog-api-semenov.herokuapp.com/posts/${postId.id}`;
      let reqComments = `https://blog-api-semenov.herokuapp.com/comments/post/${postId.id}`;
      // let resps = await axios.all([reqPost, reqComments]).then(
      //   axios.spread((...responses) => {
      //     reqPost = responses[0];
      //     reqComments = responses[1];
      //   })
      // );

      let respPost = await axios.get(reqPost);
      let respComments = await axios.get(reqComments);

      if ((respPost.statusText === "OK") & (respComments.statusText === "OK")) {
        setPost(respPost.data);
        setCommentsData(respComments.data);
        setAuthor(respPost.data.user._id);
      }
    } catch (err) {
      console.log(err);
    }

    // if (resp.statusText === "OK") {
    //   setPost(resp.data);
    //   setAuthor(resp.data.user._id);
    // } else {
    //   console.log("Сервер не отвечает!");
    //   setPost("");
    // }
  };
  const sendComment = async () => {
    let token = localStorage.getItem("token");
    try {
      // console.log(commentText + " " + postId.id);
      const resp = await axios.post(
        "https://blog-api-semenov.herokuapp.com/comments",
        {
          text: commentText,
          postId: postId.id,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      if (resp.statusText === "Created") {
        setCommentText("");
        getFullPost();
      }
    } catch (err) {
      alert("Сервер недоступен!");
      console.log(err);
    }
  };

  const handleDelete = async (type, id) => {
    let result = window.confirm("Удалить статью?");
    if (result) {
      let req = "https://blog-api-semenov.herokuapp.com/comments";
      let token = localStorage.getItem("token");
      try {
        if (type === "post") {
          req = await axios.delete(
            `https://blog-api-semenov.herokuapp.com/posts/${id}`,
            {
              headers: {
                Authorization: token,
              },
            }
          );
        } else {
          req = await axios.delete(
            `https://blog-api-semenov.herokuapp.com/comments/${id}`,
            {
              headers: {
                Authorization: token,
              },
            }
          );
        }
      } catch (err) {
        console.log(err);
        alert("Сервер недоступен!");
      }
    }
  };

  return (
    <div className="full-post">
      <div>
        <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1544&q=80"></img>

        <h1>{post.title}</h1>
        <h3>{post.description}</h3>

        <br></br>
      </div>

      <span>{post.text}</span>
      <br></br>
      {author === localStorage.getItem("id") ? (
        <div>
          <Link to={`/post/edit/${postId.id}`}>
            <Button variant="contained">
              <ModeEditIcon></ModeEditIcon>
              Редактировать статью
            </Button>
          </Link>
          <Button
            onClick={() => handleDelete("post", postId.id)}
            variant="contained"
          >
            <DeleteOutlineIcon></DeleteOutlineIcon>
            Удалить статью
          </Button>
        </div>
      ) : (
        ""
      )}
      <div className="comments">
        <h2>Комментарии</h2>
        {commentsData.length
          ? commentsData.map((data) => {
              return <Comment key={data._id} data={data} />;
            })
          : "Напиши комментарий! Будьте первыми :)"}

        <br />
        <br />
        <br />
        <div className="frm-send">
          <span>Добавить Комментарии</span>
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={4}
            sx={{ minWidth: 600 }}
            value={commentText}
            onChange={(e) => {
              setCommentText(e.target.value);
            }}
          />
          <br />
          <Button
            onClick={() => sendComment()}
            className="btn-send"
            variant="contained"
          >
            Отправить
          </Button>
        </div>
      </div>
    </div>
  );
};
