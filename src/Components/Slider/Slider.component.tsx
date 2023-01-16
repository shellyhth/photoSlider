import React from "react";
import Image from "../Image/Image.component";
import "./Slider.style.css";
type Props = {};
const imageList = [
  "https://images.unsplash.com/photo-1543690261-bdd28350060c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80",
  "https://st.depositphotos.com/1031174/1331/i/600/depositphotos_13319920-stock-photo-abstract-background.jpg",
  "https://images.unsplash.com/photo-1605400703305-8ca089a13f2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJyb3duJTIwdG9uZXN8ZW58MHx8MHx8&w=1000&q=80",
];

function Slider({}: Props) {
  const [index, setIndex] = React.useState(0);

  function showNextPicture() {
    if (index == imageList.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  function showPreviosPicture() {
    if (index == 0) {
      setIndex(imageList.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  return (
    <div>
      <Image imageUrl={imageList[index]} />
      <button className="previous" onClick={showPreviosPicture}>
        <span> Previous</span>
      </button>
      <button className="next" onClick={showNextPicture}>
        <span> Next</span>
      </button>
    </div>
  );
}

export default Slider;
