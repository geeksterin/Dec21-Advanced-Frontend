import React from "react";
import "./App.css";

function File(props) {
  //   let fileIcon;

  //   if (ext === "jpeg") {
  //     fileIcon = "file image";
  //   } else if (ext === "mp4") {
  //     fileIcon = "headphones";
  //   } else if (ext === "png") {
  //     fileIcon = "file image outline";
  //   }

  const ext = props.name.split(".")[1];

  console.log(props.name.split("."));

  const iconsList = {
    mp4: "headphones",
    jpeg: "file image",
    png: "file image outline",
  };

  const fileIcon = iconsList[ext];

  //   const obj = {
  //     name: "abhishek",
  //     age: "25",
  //   };

  //   const x = "name";

  //   console.log(obj[x]);

  return (
    <div className="file">
      <i className={`${fileIcon} icon`}></i>
      {props.name}
    </div>
  );
}

export default File;
