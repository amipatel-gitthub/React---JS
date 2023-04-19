import React from "react";
import NavBar from "./layout/NavBar";
import ParentCard from "./components/intermediate/ParentCard";


function App() {
  return (
    <>
      <NavBar heading={"Props Drilling"} color={"bg-success"} />

      <ParentCard></ParentCard>
    </>
  );
}

export default App;
