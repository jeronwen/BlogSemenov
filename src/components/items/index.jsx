import "./Items.scss";

export const Item = ({ data }) => {
  return (
    <div>
      <div onClick={() => console.log("hey")} className="item">
        <h2>{data.title}</h2>
        <span>{data.text}</span>
        <br />
        <br />
        <span>{data.createdAt}</span>
      </div>
    </div>
  );
};
