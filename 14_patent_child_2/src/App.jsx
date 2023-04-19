import React from "react";
import NavBar from "./layout/NavBar";
import ParentCard from "./components/intermediate/ParentCard";

const App = () => {
  return (
    <>
      <NavBar heading={"Bootstrap Styles"} color={"bg-success"} />

      <ParentCard></ParentCard>
    </>
  );
};
export default App;
