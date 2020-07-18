import React from "react";

import "./storeitem.css"




function Storeitem(props) {
  return (
    <div className="card card-shadow" style={{ width: "450px" }}>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text description">{props.info}</p>
        <div className="tech"><h6 className="mb-2">Hello Doggo</h6>{props.children}</div>
      </div>
    </div>

  )
};

export default Storeitem;