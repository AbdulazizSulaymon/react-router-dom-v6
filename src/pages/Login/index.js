import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../App";
import LoginWrapper from "./LoginWrapper";

export default function Login() {
  const navigate = useNavigate();
  const { isLogin, setLogin } = useContext(LoginContext);

  return (
    <LoginWrapper>
      <h1 className="display-1">Sign in</h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          setLogin(true);
          navigate("/");
        }}
      >
        Sign in
      </button>
    </LoginWrapper>
  );
}
