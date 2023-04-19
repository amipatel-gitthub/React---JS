import React from "react";
import './Cl.css';

function Clock() {
  return (
    <div className="abc">
      <div className="clock">
        <div className="wrap">
          <span className="hr"></span>
          <span className="mnt"></span>
          <span className="sec"></span>
        </div>
      </div>
    </div>
  );
}

export default Clock;
