import React from "react";
import "./Calc.css";

function Calc() {
  return (
    <>
      <div class="container text-center">
        <div className="row">
          <div className="col-12">  </div>
        </div>

        <div className="row">
            <div className="col-3">
              <button className="bt">AC</button>
            </div>
            <div className="col-3">
              <button className="bt">+/-</button>
            </div>
            <div className="col-3">
               <button className="bt">%</button>
            </div>
            <div className="col-3 orw-btn">
              <button className="bt">+</button>
            </div>
        </div>

        <div className="row">
            <div className="col-3">
              <button className="bt">7</button>
            </div>
            <div className="col-3">
              <button className="bt">8</button>
            </div>
            <div className="col-3">
               <button className="bt">9</button>
            </div>
            <div className="col-3 orw-btn">
              <button className="bt">*</button>
            </div>
        </div>

        <div className="row">
            <div className="col-3">
              <button className="bt">4</button>
            </div>
            <div className="col-3">
              <button className="bt">5</button>
            </div>
            <div className="col-3">
               <button className="bt">6</button>
            </div>
            <div className="col-3 orw-btn">
              <button className="bt">-</button>
            </div>
        </div>

        <div className="row">
            <div className="col-6">
              <button className="bt">0</button>
            </div>
            <div className="col-3">
               <button className="bt">.</button>
            </div>
            <div className="col-3 orw-btn">
              <button className="bt">=</button>
            </div>
        </div>
      </div>
    </>
  );
}

export default Calc;
