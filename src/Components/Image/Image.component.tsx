import React from "react";
import "./Image.style.css";

type Props = { imageUrl: string };

const Image = (props: Props) => {
  return (
    <div>
      <img src={props.imageUrl} />
    </div>
  );
};

export default Image;
