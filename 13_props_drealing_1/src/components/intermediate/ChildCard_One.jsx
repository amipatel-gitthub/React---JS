import React, { useState } from "react";
import ChildCard_Two from "./ChildCard_Two";

export const ChildCard_One = (props) => {
  const [c_OneText, setCText] = useState("");

  const updateInput = (event) => {
    setCText(event.target.value);
    props.setC_TwoMessage(event.target.value);
  };

  return (
    <>
      <div className="container w-50 mt-3">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header bg-warningt">
                <form>
                  <input
                    value={c_OneText}
                    onChange={(e) => updateInput(e)}
                    type="text"
                    className="form-control"
                    placeholder="Child Text"
                  />
                </form>
              </div>
              <div className="card-body bg-warning">
              <p>{props.pText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChildCard_One;
