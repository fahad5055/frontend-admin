import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { loginApi } from "../store/api/Auth";
import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { loginSuccess } from "../store/action/userActions";
// inputfield
import Inputfild from "../ChildComponents/Input";
// actions
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const mutation = useMutation({
    mutationFn: (data) => loginApi(data),
    onSuccess: (data) => {
      setLoading(false);
      dispatch(loginSuccess(data.token));
      toast.success("Successfully Login");
      navigate("/");
    },
    onError: (error) => {
      setLoading(false);
      toast.error(error.massege);
      console.log(error.massege);
    },
  });

  const auth = useSelector((state) => state.user);

  if (auth?.token) {
    return <Navigate to="/" replace />;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      mutation.mutate({ email, password });
    } catch (error) {
      setLoading(false);
      console.error("Caught error in handleSubmit:", error.message);
      setError(error.message);
      setTimeout(() => setError(" "), 5000);
    }
  };

  const setValue = (e) => {
    setEmail("admin@gmail.com");
    setPassword("asdf");
  };

  return (
    <div>
      <div className="form">
        <form className="my-3 container" onSubmit={submitHandler}>
          <div className="text-danger my-3 fw-bold d-flex justify-content-center">
            <p>Login form</p>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <div className="w-50 shadow rounded p-3 mb-5">
              <div className="mb-2 ms-2">
                <Inputfild
                  label="Email"
                  type="email"
                  className="text-secondary mb-2 fw-bold text-dark"
                  placeholder="name@gmail.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3 ms-2">
                <Inputfild
                  label="Password"
                  type="Password"
                  className="text-secondary P-2 fw-bold text-dark"
                  placeholder="******"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <p>{error}</p>
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-success">
                  {" "}
                  {loading ? "Loading.." : "Login"}
                </button>
                <button
                  className="btn btn-success ms-2"
                  onClick={(e) => setValue(e)}
                >
                  Set
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
