import React, { useContext } from "react";
import ComponentB from "./ComponentB";
// import { AppDataContext } from "../../App";
import { AppDataContext, UpdateChildContext } from "../../App";

export const ComponentA = () => {
  const theAppData = useContext(AppDataContext);
  const updateChildContext = useContext(UpdateChildContext);

  const clickSend = () => {
    updateChildContext.updateChild("1. A Child!");
  };
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body bg-info">
                <p>Component A</p>
                <pre>{JSON.stringify(theAppData)}</pre>
                <button className="btn btn-success" onClick={clickSend}>
                  Send
                </button>
                <ComponentB />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ComponentA;
