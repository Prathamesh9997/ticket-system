import React from "react";

function Topbar(props) {
  return (
    <div className="topbarContainer m-3">
      <h4>
        <strong>{props.title}</strong>{" "}
      </h4>
    </div>
  );
}

export default Topbar;
