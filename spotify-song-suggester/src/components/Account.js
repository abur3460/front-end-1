import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const Account = () => {
  return (
    <>
      <form className="form">
        <div className="input-box">
          <label htmlFor="email">email</label>
          <input type="text" id="email" name="email" />
        </div>

        <div className="input-box">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Account;
