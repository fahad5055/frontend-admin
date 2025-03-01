import React from "react";
import InputFild from "../childComponents/input";
import Button from "../childComponents/button";

function Login() {
  return (
    <div className="my-5 d-flex justify-content-center align-items-center">
      <div className="bg-secondary shadow w-50 rounded p-4">
        <InputFild
          label="Email"
          type="email"
          placeholder="ex: admin@email.com"
        />
        <InputFild
          label="Password"
          type="password"
          placeholder="ex: **********"
        />
        <Button type="submit" className="btn-success mt-2" title="login" />
      </div>
    </div>
  );
}

export default Login;
