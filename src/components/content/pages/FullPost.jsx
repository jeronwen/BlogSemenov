import React, { useEffect } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useParams, useLocation } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { Comment } from "../comment";
import { useSelector, useDispatch } from "react-redux";
import { fetchItems } from "../../../redux/actions/items";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";

export const FullPost = () => {
  const stateToken = useSelector((state) => state.globalSettings.statusLogin);
  const dispatch = useDispatch();
  let location = useLocation();
  let postId = useParams();
  let navigate = useNavigate();
  const [disableButton, setDisableButton] = React.useState(false);
  const [post, setPost] = React.useState("");
  const [commentsData, setCommentsData] = React.useState([]);
  const [commentText, setCommentText] = React.useState("");
  const [imgUrl, setImgUrl] = React.useState("#");
  const [author, setAuthor] = React.useState("");
  const [isLoaded, setIsLoaded] = React.useState(false);
  useEffect(() => {
    getFullPost();
  }, [location]);

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
  // const getImgUrl = (post) => {
  //   let mask = "https://blog-api-semenov.herokuapp.com/uploads";
  //   let numUrl = text.indexOf(mask);

  //   if ((numUrl) => 0) {
  //     let url = text.substring(numUrl, text.length);
  //     setImgUrl(url);
  //     setPost({ ...post, text: text.substring(0, url) });
  //   }
  // };
  const getFullPost = async () => {
    setIsLoaded(false);
    try {
      let mask = "https://blog-api-semenov.herokuapp.com/uploads";
      let reqPost = `https://blog-api-semenov.herokuapp.com/posts/${postId.id}`;

      let respPost = await axios.get(reqPost);

      getComments();
      if (respPost.statusText === "OK") {
        // getImgUrl(respPost.data)
        let objectPost = respPost.data;
        let numUrl = objectPost.text.indexOf(mask);

        if (numUrl !== -1) {
          let url = objectPost.text.substring(numUrl, objectPost.text.length);
          console.log(url);
          setImgUrl(url);

          objectPost = {
            ...objectPost,
            text: objectPost.text.substring(0, numUrl),
          };
          setPost(objectPost);
          setIsLoaded(true);
          // setPost({ ...post, text: text.substring(0, url) });
        } else {
          setImgUrl("#");
          setPost(objectPost);

          setAuthor(objectPost.user._id);
          setIsLoaded(true);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  const sendComment = async () => {
    let token = localStorage.getItem("token");
    setDisableButton(true);
    try {
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
          dispatch(fetchItems());
          navigate("/", { replace: true });
          alert("Статья успешно удалена!");

          req = await axios.get(
            `https://blog-api-semenov.herokuapp.com/comments/post/${id}`
          );
          if (req.statusText === "OK") {
            const arr = await Promise.all(
              req.data.map(async (comment) => {
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
      {isLoaded ? (
        <>
          <div>
            <img alt="" src={imgUrl}></img>

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
            {stateToken ? (
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
            ) : (
              ""
            )}
          </div>
        </>
      ) : (
        <div className="progress-fullpost">
          <CircularProgress />
        </div>
      )}
    </div>
  );
};
