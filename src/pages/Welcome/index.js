import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../../App";
import ImageProduct from "../../components/ImageProduct";
import ImageProductWrapper from "../../components/ImageProduct/ImageProductWrapper";

export default function Welcome() {
  const { isLogin } = useContext(LoginContext);

  return (
    <div className="container py-3">
      {isLogin ? (
        <Link to={"/dashboard/home"} className="btn btn-primary me-3">
          Dashboard
        </Link>
      ) : (
        <Link to={"/login"} className="btn btn-primary me-3">
          Sign in
        </Link>
      )}

      <h1 className="text-center display-1 mt-5">Welcome to Shopily</h1>

      <ImageProductWrapper
        className="mt-5"
        src="https://www.chinarella.uz/public/uploads/all/UKEctktCrvo5w3nFp8o2h5WBAtGT3UJzorOx1mmh.jpg"
      />
    </div>
  );
}
