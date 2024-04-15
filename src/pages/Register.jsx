import React from "react";
import { FormInput, SubmitBtn } from "../Components";
import { Form, Link } from "react-router-dom";

function Register() {
  return (
    <>
      <section className="w-25 mx-auto d-flex justify-content-center align-items-center  vh-100">
        <form className="shadow-lg p-4 mb-5 bg-body rounded" method="POST">
          <h1 className="text-center fs-4"> Register</h1>
          <FormInput type="text" label="Username" name="username" />
          <FormInput type="email" label="email" name="email" />
          <FormInput type="password" label="Password" name="password" />
          <div className="mt-3">
            <SubmitBtn text="register" />
          </div>
          <p className="text-center mt-3">
            Already a member? <Link to="/login"> Login</Link>
          </p>
        </form>
      </section>
    </>
  );
}

export default Register;
