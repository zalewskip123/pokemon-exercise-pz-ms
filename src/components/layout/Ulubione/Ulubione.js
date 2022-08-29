import React from "react";
import UlubioneList from "./UlubioneList";
import "./Ulubione.css";

function Ulubione({children}) {
  const AddToJSON = () => {
    if (JSON.parse(localStorage.getItem("idFP")).length !== 0)
    {
      var ObjU = `{"result":[`;
      for (let i = 0; i < JSON.parse(localStorage.getItem("idFP")).length; i++) {
        if (i !== JSON.parse(localStorage.getItem("idFP")).length - 1) ObjU += `{"id":"${JSON.parse(localStorage.getItem("idFP"))[i]}","name":"${JSON.parse(localStorage.getItem("pokename"))[i]}"},`;
        else ObjU += `{"id":"${JSON.parse(localStorage.getItem("idFP"))[i]}","name":"${JSON.parse(localStorage.getItem("pokename"))[i]}"}`;
    }
    ObjU += "]}";
    ObjU = ObjU.trim();
    return JSON.parse(ObjU);
    } else return null;
  }

  return (
    <main className="Ulubione">
      <div className="sidebar" />
      <div className="ulubionediv">
      <UlubioneList objU={AddToJSON} arrID={JSON.parse(localStorage.getItem("idFP"))} arrName={JSON.parse(localStorage.getItem("pokename"))}/>
      </div>
      <div className="sidebar" />
    </main>
  );
}

export default Ulubione;
