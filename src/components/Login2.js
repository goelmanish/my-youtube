import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../utils/userLogin";
import { useNavigate } from "react-router-dom";

const Login2 = () => {
  const [loginObj, setLoginObj] = useState({});
  const dispatcher = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.innerText);
    if (userAuthenticated) {
      //call login API
      console.log("store userName: ", loginObj);
      dispatcher(login(loginObj.userName));
      navigate("/");
    } else {
      dispatcher(logout());
      alert("invalid credentials");
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setLoginObj({ ...loginObj, [event.target.name]: value });
  };

  const userAuthenticated = async () => {
    return true;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="h-[100%] grid grid-cols-3-2 gap-2 place-content-center">
        <div className="bg-gray-100 shadow-lg h-[200px] w-[500px] ">
          <div className="m-2 p-2">
            <span className="ml-2">User Name: </span>
            <input
              type="text"
              name="userName"
              onChange={(e) => handleChange(e)}
            ></input>
          </div>
          <div className="m-2 p-2">
            <span className="ml-2">Password: </span>
            <input
              type="text"
              name="pass"
              onChange={(e) => handleChange(e)}
            ></input>
          </div>
          <div className="m-2 p-2">
            <input type="Submit"></input>
            {/* <button
              className="bg-blue-100 p-2 cursor-pinter"
              onClick={(event) => {
                handleLogin(event);
              }}
            >
              Login
            </button> */}
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login2;
