import React from "react";
import Link from "next/link";

const MainFooter = () => {
  return (
    <div>
      <div className="footer bg-secondary">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-4 offset-1 col-sm-2">
              <h5>Links</h5>
              <ul className="list-unstyled">
                <li>
                  <Link
                    href="/"
                    style={{
                      textDecoration: "none",
                      color: "#0000FF",
                      fontWeight: "bold",
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/admin-panel"
                    style={{
                      textDecoration: "none",
                      color: "#0000FF",
                      fontWeight: "bold",
                    }}
                  >
                    Admin
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sign-in"
                    style={{
                      textDecoration: "none",
                      color: "#0000FF",
                      fontWeight: "bold",
                    }}
                  >
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    style={{
                      textDecoration: "none",
                      color: "#0000FF",
                      fontWeight: "bold",
                    }}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-7 col-sm-5">
              <h5>Our Address</h5>
              <address>
                Lalmatia, Dhanmondi, Dhaka-1205
                <br />
                Bangladesh
                <br />
                <i className="fa fa-phone fa-lg"></i>: +8801XXXXXXXXX
                <br />
                <i className="fa fa-fax fa-lg"></i>: +8801XXXXXXXXX
                <br />
                <i className="fa fa-envelope fa-lg"></i>:
                <Link
                  href="mailto:jobs@repliq.dev"
                  style={{
                    textDecoration: "none",
                    color: "#0000FF",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  jobs@repliq.dev
                </Link>
              </address>
            </div>
            <div className="col-12 col-sm-4 align-self-center">
              <div className="text-center">
                <Link
                  className="btn btn-social-icon btn-google"
                  href="https://google.com/"
                >
                  <i
                    className="fa fa-google-plus"
                    style={{ fontSize: "200%" }}
                  ></i>
                </Link>
                <Link
                  className="btn btn-social-icon btn-facebook"
                  href="https://www.facebook.com/profile.php?id="
                >
                  <i
                    className="fa fa-facebook"
                    style={{ fontSize: "200%" }}
                  ></i>
                </Link>
                <Link
                  className="btn btn-social-icon btn-linkedin"
                  href="https://www.linkedin.com/in/"
                >
                  <i
                    className="fa fa-linkedin"
                    style={{ fontSize: "200%" }}
                  ></i>
                </Link>
                <Link
                  className="btn btn-social-icon btn-twitter"
                  href="https://twitter.com/"
                >
                  <i className="fa fa-twitter" style={{ fontSize: "200%" }}></i>
                </Link>
                <Link
                  className="btn btn-social-icon btn-google"
                  href="https://youtube.com/"
                >
                  <i className="fa fa-youtube" style={{ fontSize: "200%" }}></i>
                </Link>
                <Link
                  className="btn btn-social-icon"
                  href="mailto:jobs@repliq.dev"
                >
                  <i
                    className="fa fa-envelope-o"
                    style={{ fontSize: "200%" }}
                  ></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-auto">
              <Link
                href="https://github.com/zakaria-akash"
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "#0000FF",
                  fontWeight: "bold",
                }}
              >
                © 2023 Zakaria Ibrahim
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
