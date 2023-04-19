import React, { useState } from "react";
// import "./App.css";
import NavBar from "./layout/NavBar";
import ComponentA from "./components/context-api/ComponentA";
// import { AppDataContext, UpdateChildContext } from "../../App";


// interface UpdateChildType {
//   updateChild: (msg: string) => void;
// }

export const AppDataContext = React.createContext({});
export const UpdateChildContext = React.createContext({});

const App = () => {
  const [appData, setAppData] = useState({
    name: "React JS",
    version: 18.0,
    author: "Meta",
  });
  // setAppData = (appData) => {
  //   appData.name = "";
  // };
  const [childText, setChildText] = useState("");

  const updateChildFn = (msg) => {
    setChildText(msg);
  };

  return (
    <>
      <NavBar heading={"Context API"} color={"bg-success"} />

      <div className="container mt-3">
        <div className="row">
          <div className="col-sm-8">
            <div className="card">
              <div className="card-body bg-light">
                <pre>{JSON.stringify(appData)}</pre>
                <pre>From Child : {JSON.stringify(childText)}</pre>
                <p className="text-center fw-bold"><u>App Component</u></p>

                {/** Provide the context data */}
                <AppDataContext.Provider value={appData}>
                  <UpdateChildContext.Provider
                    value={{ updateChild: updateChildFn }}
                  >
                    <ComponentA />     
                  </UpdateChildContext.Provider>
                </AppDataContext.Provider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
