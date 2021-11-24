import React from "react";
import "./WeaponSelector.css";
import CreateWeapon from "../components/CreateWeapon.jsx";

function WeaponSelector({ count, setCount, shown, setShown }) {
  const [arr, setarr] = React.useState([]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 2);
      setarr((prevArr) => {
        if (prevArr.length > 10) {
          clearInterval(interval);
        }
        return prevArr.concat(1);
      });
    }, 1000);
  }, []);

  console.log("5ra", arr.length);
  function TestDiv() {
    return shown ? <div className="test">{count}</div> : arr.length > 10 ? <div className="test">Stopped</div> : <div className="test">{count}</div>;
  }
  return (
    <main>
      <TestDiv></TestDiv>
      <div
        className={shown ? "toggleWeaponSelectorOn" : "toggleWeaponSelectorOff"}
        onClick={() => {
          setShown(!shown);
        }}
      >
        {shown ? "<" : ">"}
      </div>
      <div className={shown ? "weaponSelectorOn" : "weaponSelectorOff"}>
        <div className="weapons">
          <CreateWeapon></CreateWeapon>
        </div>
      </div>
    </main>
  );
}
export default WeaponSelector;
