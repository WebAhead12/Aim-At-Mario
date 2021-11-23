import React from "react";
const imagenames = ["gun1", "gun2", "gun3", "gun4", "gun5", "gun6"];
// const images = importAll(require.context("./images", false, /\.(png|jpe?g|svg)$/));

function CreateWeapon() {
  return imagenames.map((gun) => {
    return <img className="weapon" key={gun} src={require(gun + ".png")} alt=""></img>;
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
// images[gun + ".png"].default
