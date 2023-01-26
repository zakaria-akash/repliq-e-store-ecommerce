import SignInComponent from "@/components/sign-in/sign-in.compoenent";
import Head from "next/head";
import React, { Fragment } from "react";

const SignIn = () => {
  let headTagForThisPage = (
    <Head>
      <title>Sign-in</title>
      <meta name="description" content="REPLIQ || Sign-in Page" />
    </Head>
  );
  return (
    <Fragment>
      {headTagForThisPage}
      <div className="container ms-auto me-auto mt-5 mb-5">
        <div className="row">
          <div className="category-title col-sm-12 text-center mt-0 mb-4 mx-auto">
            Sign-in with us
          </div>
          <div className="col-sm-12 col-md-6 ms-auto me-auto">
            <SignInComponent />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SignIn;
