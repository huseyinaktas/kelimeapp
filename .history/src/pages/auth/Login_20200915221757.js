import React, { useState } from "react";

const Login = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">App name</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="">E-mail</label>
              <input type="email" className="form-control"  />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
