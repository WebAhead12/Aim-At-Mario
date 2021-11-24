import React from "react";
const imagenames = [
  "gun1.png",
  "gun2.png",
  "gun3.png",
  "gun4.png",
  "gun5.png",
  "gun6.png",
];
// const images = importAll(require.context("./images", false, /\.(png|jpe?g|svg)$/));

function CreateWeapon() {
  // console.log(images);
  return imagenames.map((gun) => {
    return (
      <img className="weapon" key={gun} src={`images/${gun}`} alt=""></img>
    );
  });
}
// function importAll(r) {
//   let images = {};
//   r.keys().map((item, index) => {
//     return (images[item.replace("./", "")] = r(item));
//   });
//   return images;
// }
export default CreateWeapon;
