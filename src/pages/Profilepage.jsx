import React from "react";
import Menu from "../components/Menu";
import { useParams } from "react-router-dom";

const Profilepage = () => {
  let {fbId,name}=useParams();
  return (
    <div>
      <Menu />

      <p>{fbId}</p>
      <p>{name}</p>
      <h1>This is profile page</h1>
    </div>
  );
};

export default Profilepage;
