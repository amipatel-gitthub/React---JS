import React, { useState } from "react";

export const ChildCard_Two = (props) => {
  const [c_TwoText, setCText] = useState("");

  const updateInput = (event) => {
    setCText(event.target.value);
    props.setC_TwoMessage(event.target.value);
  };

  return (
    <>
      <div className="container  w-25 mt-3">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header bg-light">
                <form>
                  <input
                    value={c_TwoText}
                    onChange={(e) => updateInput(e)}
                    type="text"
                    className="form-control"
                    placeholder="Child Text"
                  />
                </form>
              </div>
              <div className="card-body bg-light">
                <p>{props.pText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChildCard_Two;
