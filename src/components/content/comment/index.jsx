import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Button from "@mui/material/Button";

export const Comment = ({ data }) => {
  return (
    <div>
      <h4>{data.user.fullName}</h4>
      <span>{data.text}</span>
      <Button>
        <DeleteOutlineIcon></DeleteOutlineIcon>
        Удалить
      </Button>
    </div>
  );
};
