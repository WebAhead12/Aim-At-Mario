import React from "react";
import "./WeaponSelector.css";
import CreateWeapon from "../components/CreateWeapon.jsx";
function WeaponSelector(props) {
  return (
    <main>
      <div className={props.shown ? "toggleWeaponSelectorOn" : "toggleWeaponSelectorOff"} onClick={() => props.setShown(!props.shown)}></div>
      <div className="weaponSelector">
        <div className={props.shown ? "weaponsOn" : "weaponsOff"}>
          <CreateWeapon></CreateWeapon>
        </div>
      </div>
    </main>
  );
}
export default WeaponSelector;
