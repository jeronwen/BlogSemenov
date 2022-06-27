import Box from "@mui/material/Box";

import TextareaAutosize from "@mui/material/TextareaAutosize";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const CreatePost = () => {
  return (
    <div className="create-post">
      <div className="title">
        <TextField
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
        <TextareaAutosize maxRows={4} style={{ width: 500, height: 100 }} />
      </div>
      <br />
      <h3>Изображение</h3>
      <div className="img">
        <TextField></TextField>
        <Button variant="contained">Загрузить</Button>
      </div>
      <br />
      <h3>Полное описание</h3>
      <div className="full-desc">
        <TextareaAutosize maxRows={4} style={{ width: 500, height: 100 }} />
      </div>
    </div>
  );
};
