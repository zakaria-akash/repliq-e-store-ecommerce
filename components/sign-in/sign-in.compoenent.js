import React from "react";
import NewAccountForm from "../new-account-form/new-account-form";

const SignInComponent = () => {
  return (
    <form className="bg-transparent fs-3">
      {/* Email input */}
      <div className="form-outline mb-4">
        <input
          type="email"
          id="form2Example1"
          className="form-control"
          required
        />
        <label className="form-label" htmlFor="form2Example1">
          Email address
        </label>
      </div>

      {/* Password input */}
      <div className="form-outline mb-4">
        <input
          type="password"
          id="form2Example2"
          className="form-control"
          required
        />
        <label className="form-label" htmlFor="form2Example2">
          Password
        </label>
      </div>

      {/* 2 column grid layout for inline styling */}
      <div className="row mb-4">
        <div className="col d-flex justify-content-center">
          {/* Checkbox */}
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="form2Example31"
            />
            <label className="form-check-label" htmlFor="form2Example31">
              {" "}
              Remember me{" "}
            </label>
          </div>
        </div>

        <div className="col">
          {/* Simple link */}
          <a href="#!">Forgot password?</a>
        </div>
      </div>

      {/* Signin button */}
      <div className="d-grid">
        <a href="#" className="btn btn-lg btn-primary fw-bold fs-3">
          Sign-in
        </a>
      </div>

      {/* Register buttons */}
      <div className="text-center">
        <p>Not a member?</p>
        <NewAccountForm />
        <p>or sign up with:</p>
        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fa fa-facebook"></i>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fa fa-google"></i>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fa fa-linkedin"></i>
        </button>

        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fa fa-github"></i>
        </button>
      </div>
    </form>
  );
};

export default SignInComponent;
