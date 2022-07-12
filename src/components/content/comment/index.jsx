import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Button from "@mui/material/Button";

export const Comment = ({ data, handleDelete }) => {
  React.useEffect(() => {
    setActiveAuthor(data.user._id);
  }, []);
  const [author, setActiveAuthor] = React.useState("");

  return (
    <div>
      <h4>{data.user.fullName}</h4>
      <span>{data.text}</span>
      {author === localStorage.getItem("id") ? (
        <Button onClick={(e) => handleDelete("", data._id)}>
          <DeleteOutlineIcon></DeleteOutlineIcon>
          Удалить
        </Button>
      ) : (
        ""
      )}
    </div>
  );
};
