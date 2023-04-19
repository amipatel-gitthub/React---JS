import React, { useContext } from "react";
import ComponentC from "./ComponentC";
// import { AppDataContext } from "../../App";
import { AppDataContext, UpdateChildContext } from "../../App";

export const ComponentB = () => {
  const theAppData = useContext(AppDataContext);
  const updateChildContext = useContext(UpdateChildContext);

  const clickSend = () => {
    updateChildContext.updateChild("2. B Child!");
  };
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body bg-warning">
                <p>Component B</p>
                <pre>{JSON.stringify(theAppData)}</pre>
                <button className="btn btn-success" onClick={clickSend}>
                  Send
                </button>
                <ComponentC />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ComponentB;
