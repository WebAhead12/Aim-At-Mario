import React from "react";
const imagenames = ["gun1", "gun2", "gun3", "gun4", "gun5", "gun6"];
const images = importAll(require.context("./images", false, /\.(png|jpe?g|svg)$/));

function CreateWeapon() {
  console.log(images);
  return imagenames.map((gun) => {
    return <img className="weapon" key={gun} src={images[gun + ".png"].default} alt=""></img>;
  });
}
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    return (images[item.replace("./", "")] = r(item));
  });
  return images;
}
export default CreateWeapon;
