import React, { useState } from "react";
import ChildCard_Two from "./ChildCard_Two";
import ChildCard_One from "./ChildCard_One";

export const ParentCard = () => {
  const [pText, setPText] = useState("");
  const [cMessage, setCMessage] = useState("");

  const updateInput = (event) => {
    setPText(event.target.value);
  };

  return (
    <>
      <div className="container mt-3  w-75 h-6 ">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header bg-info">
                <form>
                  <input
                    value={pText}
                    onChange={(e) => updateInput(e)}
                    type="text"
                    className="form-control"
                    placeholder="Parent Text"
                  />
                </form>
              </div>
              <div className="card-body bg-info">
                <p>{cMessage}</p>
                <ChildCard_Two pText={pText} setCMessage={setCMessage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ParentCard;
