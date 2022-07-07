import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Input } from "@mui/material";
import { IconButton } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";

export const CreatePost = () => {
  const { register, handleSubmit } = useForm();
  const [disabled, setDisabled] = React.useState(false);
  const [disabledUpload, setDisabledUpload] = React.useState(false);
  const [file, setFile] = React.useState("");
  const uploadFile = async () => {
    try {
      setDisabledUpload(true);
      const img = file[0];
      const formData = new FormData();
      formData.append("file", img);

      const res = await axios.post(
        "https://blog-api-semenov.herokuapp.com/posts/upload",
        formData,
        { headers: { "Content-type": "multipart/form-data" } }
      );
      if (res.statusText === "OK") {
        alert("Изображение загрузилось успешно!");
        console.log(res.data);
      }
    } catch (err) {
      console.log(err);
      setDisabledUpload(false);
      alert("Изображение не загрузилось!");
    }
  };
  const onSubmit = async (data) => {
    const token = localStorage.getItem("token");
    setDisabled(true);
    try {
      const reqPost = await axios.post(
        `https://blog-api-semenov.herokuapp.com/posts`,
        {
          title: data.title,
          description: data.description,
          text: data.text,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      // if (reqPost.statusText === "OK") {
      //   alert("Статья успешно опубликована!");
      setDisabled(false);
    } catch (err) {
      alert("Произошла ошибка");

      setDisabled(false);
    }
  };
  return (
    <div className="create-post">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="title">
          <TextField
            {...register("title")}
            id="standard-multiline-flexible"
            label="Заголовок статьи"
            multiline
            maxRows={4}
            variant="standard"
          />
        </div>
        <br />

        <div className="short-desc">
          <h3>Короткое описание</h3>
          <TextareaAutosize
            {...register("description")}
            maxRows={4}
            style={{ width: 500, height: 100 }}
          />
        </div>
        <br />
        <h3>Изображение</h3>
        <div className="img">
          {/* <Input></Input> */}
          <Input
            onChange={(event) => {
              setFile(event.target.files);
            }}
            disabled={disabledUpload}
            className="file"
            type="file"
          ></Input>

          {/* <IconButton type="file" className="chooseFile" variant="contained">
            <AttachFileIcon></AttachFileIcon>
          </IconButton> */}
          <Button
            onClick={() => uploadFile()}
            variant="contained"
            disabled={disabledUpload}
          >
            Загрузить
          </Button>
        </div>
        <br />
        <h3>Полное описание</h3>
        <div className="full-desc">
          <TextareaAutosize
            {...register("text")}
            maxRows={4}
            style={{ width: 500, height: 100 }}
          />
        </div>
        <br />
        <Button type="submit" variant="contained" disabled={disabled}>
          Опубликовать статью
        </Button>
      </form>
    </div>
  );
};
