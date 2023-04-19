import React, { useState } from "react";

export const ChildCard = (props) => {
  const [cText, setCText] = useState("");

  const updateInput = (event) => {
    setCText(event.target.value);
    props.setCMessage(event.target.value);
  };

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header bg-info">
                <form>
                  <input
                    value={cText}
                    onChange={(e) => updateInput(e)}
                    type="text"
                    className="form-control"
                    placeholder="Child Text"
                  />
                </form>
              </div>
              <div className="card-body bg-info">
                <p>{props.pText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChildCard;
