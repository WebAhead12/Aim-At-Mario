import React from "react";
const imagenames = ["gun1.png", "gun2.png", "gun3.png", "gun4.png", "gun5.png", "gun6.png"];

function CreateWeapon() {
  return imagenames.map((gun) => {
    return <img className="weapon" key={gun} src={`images/${gun}`} alt=""></img>;
  });
}

export default CreateWeapon;
