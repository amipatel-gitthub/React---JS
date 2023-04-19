import React from "react";
import "./Form.css";
import "./fb.svg";

function Form() {
  return (
    <div className="main-box">
      <div className="header">
        <h1>Create a new account</h1>
        <p>It's quick and easy.</p>
      </div>
      <hr></hr>
      <div className="container">
        <div class="row gx-5">
          <div className="col-3">
            <input
              type="text"
              class="form-control"
              placeholder="First name"
              aria-label="First name"
              required
            />
            <input
              type="text"
              class="form-control"
              placeholder="Last name"
              aria-label="Last name"
              required
            />
          </div>
          <div className="col-3">
            <input
              type="text"
              id="email"
              name="email"
              class="form-control"
              placeholder="Mobile number or email address"
            />
          </div>
          <div className="col-7">
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            ></input>
          </div>
          <div className="col-3">
            <label>Date of birth</label>
            <br />
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
