import React, { useState } from "react";
import ChildCard from "./ChildCard";

export const ParentCard = () => {
  const [pText, setPText] = useState("");
  const [cMessage, setCMessage] = useState("");

  const updateInput = (event) => {
    setPText(event.target.value);
  };

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-sm-5">
            <div className="card">
              <div className="card-header bg-warning">
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
              <div className="card-body bg-warning">
                <p>{cMessage}</p>
                <ChildCard pText={pText} setCMessage={setCMessage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ParentCard;
