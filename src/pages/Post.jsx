import React from "react";

import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

export const Post = () => {
  return (
    <div className="full-post">
      <div>
        <img src="https://cs7.pikabu.ru/post_img/2019/01/30/9/1548860096115090477.jpg"></img>
        <h1>Какой-то очень интересный заголовок</h1>
        <h3>
          Я часто замечаю, что начинающие фронтенд-разработчики по несколько раз
          то начинают, то забрасывают изучение технологий.
        </h3>

        <br></br>
      </div>

      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
        scelerisque diam arcu risus. Imperdiet dolor, porttitor pellentesque
        fringilla aliquet sit. Turpis arcu vitae quis nunc suscipit. Mattis
        scelerisque leo curabitur faucibus. Nec, sed porta ac enim. Mattis quam
        accumsan ipsum commodo sed purus mi. Platea sit lectus neque, nulla
        sapien vitae nulla. Nisl viverra viverra quis mattis tincidunt laoreet
        amet, laoreet proin. Duis mi, aliquam tincidunt amet phasellus malesuada
        non nisi.
      </span>
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
