import React from "react";
import "./WeaponSelector.css";
import CreateWeapon from "./CreateWeapon.jsx";

function WeaponSelector({ shown, setShown }) {
  const [currentgun, setGun] = React.useState(0);
  return (
    <main>
      <div
        className={shown ? "toggleWeaponSelectorOn" : "toggleWeaponSelectorOff"}
        onClick={() => {
          setShown(!shown);
        }}
      >
        {shown ? "<" : "Weapons>"}
      </div>
      <div className={shown ? "weaponSelectorOn" : "weaponSelectorOff"}>
        <div className="weapons">
          <CreateWeapon
            currentgun={currentgun}
            setGun={setGun}
            shown={shown}
            setShown={setShown}
          />
        </div>
      </div>
      <img className="currentGun" src={`images/${currentgun}`} alt=""></img>
    </main>
  );
}
export default WeaponSelector;
