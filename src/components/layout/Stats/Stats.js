import React from "react";
import { useParams } from "react-router-dom";
import "./Stats.css";

const Stats = ({children}) => {

  const {id} = useParams();

  return (
    <main className="Stats">
      <div className="sidebar" />
      <div className="statsdiv">{ children }</div>
      <div className="sidebar" />
      <div>
        <h1> staty = {id}</h1>
      </div>
    </main>
  );
}

export default Stats;
