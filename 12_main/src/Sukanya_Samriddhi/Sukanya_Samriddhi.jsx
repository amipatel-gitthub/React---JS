import React, { useState } from "react";

const Sukanya_Samriddhi = () => {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [total, setTotal] = useState("");
  const [Total_dep, setTotal_dep] = useState("");
  const [Mat_amt, setMat_amt] = useState("");
  const [tm_1, setSelected_1] = useState("");
  const [tm_2, setSelected_2] = useState("");
  const [tm_3, setSelected_3] = useState("");
  const [tm_4, setSelected_4] = useState("");
  const [tm_5, setSelected_5] = useState("");
  const [tm_6, setSelected_6] = useState("");

  const amountChange = (event) => {
    setAmount(event.target.value);
  };

  const rateAmount = (event) => {
    setRate(event.target.value);
  };

  const timeChange = (event) => {
    setTime(event.target.value);
  };

  const calculate = (event) => {
    let cal_amt = amount * Math.pow(1 + rate / 100, 1 * 1);
    // let cal_a = cal_amt - amount;
    let cal = cal_amt * 21;
    setTotal(cal.toFixed(2));

    let dep = amount * 15;
    setTotal_dep(dep.toFixed(2));

    let mat = cal + dep;
    setMat_amt(mat.toFixed(2));
  };

  const reset = (event) => {
    setAmount("");
    setRate("");
    setTime("");
    setTotal("");
  };

  return (
    <>
      <div className="container align-items-center justify-content-center d-flex ">
        <form className="border border-dark mt-1 p-3 w-45 rounded-4 ">
          <h2 className="fw-bold text-center mb-3">Sukanya Samriddhi</h2>
          <label className="fw-light mb-0 ">Girl Child's Age</label>
          <br></br>
          <select name="age" id="age" className="border-0 form-select">
            <option>Less than a year</option>
            <option>1 Year</option>
            <option>2 Year</option>
            <option>3 Year</option>
            <option>4 Year</option>
            <option>5 Year</option>
            <option>6 Year</option>
            <option>7 Year</option>
            <option>8 Year</option>
            <option>9 Year</option>
          </select>
          <br></br>

          <label className="fw-light mt-0 m-0">Deposite Amount</label>
          <br></br>
          <input
            type="text"
            id="fname"
            className="border-0 border-bottom"
            name="fname"
            value={amount}
            onChange={(event) => amountChange(event)}
            placeholder="Rs."
            required
          />
          <select
            className="border-0 "
            size="1"
            value={time}
            onChange={(event) => timeChange(event)}
          >
            <option>Monthly{tm_1}</option>
            <option>Bi-Monthly{tm_2}</option>
            <option>Quarterly{tm_3}</option>
            <option>Thrice Yearly{tm_4}</option>
            <option>Half Yearly{tm_5}</option>
            <option>Yearly{tm_6}</option>
          </select>
          <br></br>

          <label className="fw-light mt-3">Annual Interest Rate (%)</label>
          <br></br>
          <input
            type="text"
            id="rate"
            name="rate"
            className="form-control border-0 pb-0 border-bottom"
            value={rate}
            onChange={(event) => rateAmount(event)}
            placeholder="7.6% currently"
          />
          <br></br>

          <label for="l1" className="fw-light mt-1">
            Deposit Period
          </label>
          <br></br>
          <label for="l2" className="l2">
            15 Years
          </label>
          <br></br>
          <br></br>
          <label for="l3" className="fw-light mt-0 pt-0">
            Maturity Period
          </label>
          <br></br>
          <label for="l4" className="l2">
            21 Years
          </label>
          <br></br>
          <br></br>

          <div className="container col-md-12 text-center">
            <button
              type="reset"
              className="btn btn-outline-primary"
              value="RESET"
              onClick={(event) => reset(event)}
            >
              RESET
            </button>
            <button
              type="submit"
              className=" btn btn-primary"
              value="CALCULATE"
              onClick={(event) => calculate(event)}
            >
              CALCULATE
            </button>
          </div>
        </form>
      </div>
      <div className="mt-3 p-3 w-80 align-items-center justify-content-center d-flex">
        {/* <h2>Result</h2> */}
        <div className="l-1 col-2 border border-dark p-2 text-center">
          <label for="deposite" className="fw-bold ">
            Maturity Amount
          </label>
          <br></br>
          <hr></hr>
          <label for="deposite" className="text-center fw-light ">
            {Mat_amt}
          </label>
        </div>

        <div className="l-1 col-2 border border-dark p-2 text-center">
          <label for="deposite" className="fw-bold ">
            Total Deposits
          </label>
          <br></br>
          <hr></hr>
          <label for="deposite" className="text-center fw-light ">
            {Total_dep}
          </label>
        </div>

        <div className="l-1 col-2  border border-dark p-2 text-center">
          <label for="deposite" className="fw-bold ">
            Total Interest
          </label>
          <br></br>
          <hr></hr>
          <label for="deposite" className="text-center fw-light ">
            {total}
          </label>
        </div>
      </div>
    </>
  );
};

export default Sukanya_Samriddhi;
