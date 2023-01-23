import SignInComponent from "@/components/sign-in/sign-in.compoenent";
import React from "react";

const SignIn = () => {
  return (
    <div className="container ms-auto me-auto mt-5 mb-5">
      <div className="row">
        <div className="col-6 ms-auto me-auto">
          <SignInComponent />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
