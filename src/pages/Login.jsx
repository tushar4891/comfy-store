import React from "react";
import { FormInput, SubmitBtn } from "../Components";
import { Form, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

function Login() {
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    const prevPathName = sessionStorage.getItem("prevPathname");
    console.log("pATHNAME", prevPathName);
    if (prevPathName) {
      navigate(prevPathName);
      sessionStorage.removeItem("prevPathname"); // Corrected
      console.log("remove ", prevPathName);
    } else {
      navigate("/");
    }
    setIsLoggedIn(true);
  };

  return (
    <>
      <section className="w-75 mx-auto  d-flex justify-content-center align-items-center vh-100">
        <form className="shadow-lg p-4 mb-5 bg-light rounded" method="POST">
          <h1 className="text-center fs-4"> Login</h1>
          <FormInput
            type="email"
            label="Email"
            name="identifier"
            defaultValue="test@test.com"
          />
          <FormInput
            type="password"
            label="Password"
            name="password"
            defaultValue="secret"
          />

          {/* <div className="mt-3">
            <SubmitBtn text="login" />
          </div> */}
          <button
            type="button"
            className="btn btn-info btn-block mt-3"
            onClick={handleClick}
            style={{ width: "250px" }}
          >
            LOGIN
          </button>
          {/* <p className="text-center mt-3">
            Not a member yet? <Link to="/register"> Register</Link>
          </p> */}
        </form>
      </section>
    </>
  );
}

export default Login;
