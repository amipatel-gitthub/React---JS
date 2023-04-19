import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  //   let count = 10;
  //   let coutInc = () => {
  //     count++;
  //     console.log('Increment number : ${count}');
  //   };
  //   let coutDec = () => {
  //     console.log('Decrement number : ${count}');
  //     count--;
  //   };

  const [count, setCount] = useState(0);

  const clickIncr = () => {
    setCount(count + 1);
    //coutInc();
  };

  const clickDecr = () => {
    setCount(count - 1);
    //coutDec();
  };

  const clickIncrbyfive = () => {
    setCount(count + 5);
    //coutInc();
  };

  const clickDecrbyfive = () => {
    setCount(count - 5);
    //coutDec();
  };

  return (
    <div className="container mt-3 abc">
      <div className="row">
        <div className="col-sm-3">
          <div className="card text-center">
            <div className="card-body">
              <p className="hdr">counter</p>
              <hr></hr>
              <p className="display-2">{count}</p>
              <br></br>

              <button className="btn btn-success me-2" onClick={clickIncr}>
                Increment
              </button>

              <button className="btn btn-danger" onClick={clickDecr}>
                Decrement
              </button>
              <br></br>

              <button className="btn abtn-clr me-2" onClick={() => setCount(count + 5)}>
                Increment by 5
              </button>
              <br></br>

              <button className="btn abtn-clr" onClick={() => setCount(count - 5)}>
                Decrement by 5
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
//k
