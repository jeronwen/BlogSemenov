import React, { useEffect } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { Comment } from "../comment";
import { fetchItems } from "../../../redux/actions/items";
import axios from "axios";
import { useDispatch } from "react-redux";

export const FullPost = () => {
  const dispatch = useDispatch;
  let postId = useParams();
  let navigate = useNavigate();
  const [disableButton, setDisableButton] = React.useState(false);
  const [post, setPost] = React.useState("");
  const [commentsData, setCommentsData] = React.useState([]);
  const [commentText, setCommentText] = React.useState("");
  const [author, setAuthor] = React.useState("");
  useEffect(() => {
    console.log("статья");
    getFullPost();
  }, [postId]);

  const getComments = async () => {
    let reqComments = `https://blog-api-semenov.herokuapp.com/comments/post/${postId.id}`;
    try {
      let respComments = await axios.get(reqComments);
      if (respComments.statusText === "OK") {
        setCommentsData(respComments.data);
      }
    } catch (err) {
      alert("Произошла ошибка при загрузке комментариев");
      console.log(err);
    }
  };

  const getFullPost = async () => {
    try {
      let reqPost = `https://blog-api-semenov.herokuapp.com/posts/${postId.id}`;

      let respPost = await axios.get(reqPost);

      getComments();
      if (respPost.statusText === "OK") {
        setPost(respPost.data);

        setAuthor(respPost.data.user._id);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const sendComment = async () => {
    let token = localStorage.getItem("token");
    setDisableButton(true);
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
        getComments();
        setDisableButton(false);
        setCommentText("");
      }
    } catch (err) {
      alert("Сервер недоступен!");
      setDisableButton(false);
      console.log(err);
    }
  };

  const handleDelete = async (type, id) => {
    let result = window.confirm(
      type === "post" ? "Удалить статью?" : "Удалить комментарий?"
    );

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
          // reqComments = await axios.delete(
          //   `https://blog-api-semenov.herokuapp.com/comments/${id}`,
          //   {
          //     headers: {
          //       Authorization: token,
          //     },
          //   }
          // );
          navigate("/", { replace: true });
          alert("Статья успешно удалена!");
          // dispatch(fetchItems());
          req = await axios.get(
            `https://blog-api-semenov.herokuapp.com/comments/post/${id}`
          );
          if (req.statusText === "OK") {
            console.log("start delete");
            const arr = await Promise.all(
              req.data.map(async (comment) => {
                console.log("start delete 2");
                axios.delete(
                  `https://blog-api-semenov.herokuapp.com/comments/${comment._id}`,
                  {
                    headers: {
                      Authorization: token,
                    },
                  }
                );
              })
            );

            // await reqComments.map((comment) => {
            //   console.log("start delete 2");
            //   axios.delete(
            //     `https://blog-api-semenov.herokuapp.com/comments/${comment._id}`
            //   );
            // });
          }
        } else {
          req = await axios.delete(
            `https://blog-api-semenov.herokuapp.com/comments/${id}`,
            {
              headers: {
                Authorization: token,
              },
            }
          );
          getComments();
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
            <Button disabled={disableButton} variant="contained">
              <ModeEditIcon></ModeEditIcon>
              Редактировать статью
            </Button>
          </Link>
          <Button
            disabled={disableButton}
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
              return (
                <Comment
                  key={data._id}
                  data={data}
                  handleDelete={handleDelete}
                />
              );
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
            disabled={disableButton}
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
