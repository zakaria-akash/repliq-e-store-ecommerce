import Image from "next/legacy/image";
import React, { Fragment } from "react";

const Homepage = () => {
  return (
    <Fragment>
      <div className="container mt-3">
        <div className="mt-4 p-5 bg-primary text-white rounded">
          <h1>REPLIQ E-MART</h1>
          <p>
            We are a team of passionate designers and developers who love
            building great digital products and experiences.
          </p>
        </div>
      </div>
      <div className="row container mt-5 mb-5 ms-auto me-auto">
        <div className="row">
          <div className="card col-md-3 m-auto pt-3 bg-transparent border-0">
            <Image
              src="/images/mens-clothings.jpg"
              className="card-img-top"
              alt="mens-clothings"
              width={300}
              height={350}
              layout="responsive"
            />
            <div className="card-body text-info">
              <h5 className="card-title fw-bold fs-3 border-bottom border-info">
                Men's Dresses
              </h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card content.
              </p>
              <div className="d-grid">
                <a href="#" className="btn btn-lg btn-primary fw-bold">
                  GO
                </a>
              </div>
            </div>
          </div>
          <div className="card col-md-3 m-auto pt-3 bg-transparent border-0">
            <Image
              src="/images/womens-clothings.jpg"
              className="card-img-top"
              alt="womens-clothings"
              width={300}
              height={350}
              layout="responsive"
            />
            <div className="card-body text-info">
              <h5 className="card-title fw-bolder fs-3 border-bottom border-info">
                Women's Wears
              </h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card content.
              </p>
              <div className="d-grid">
                <a href="#" className="btn btn-lg btn-primary fw-bold">
                  GO
                </a>
              </div>
            </div>
          </div>
          <div className="card col-md-3 m-auto pt-3 bg-transparent border-0">
            <Image
              src="/images/jewelery.jpg"
              className="card-img-top"
              alt="mens-clothings"
              width={300}
              height={350}
              layout="responsive"
            />
            <div className="card-body text-info">
              <h5 className="card-title fw-bold fs-3 border-bottom border-info">
                Jewelery
              </h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card content.
              </p>
              <div className="d-grid">
                <a href="#" className="btn btn-lg btn-primary fw-bold">
                  GO
                </a>
              </div>
            </div>
          </div>
          <div className="card col-md-3 m-auto pt-3 bg-transparent border-0">
            <Image
              src="/images/electronics.jpg"
              className="card-img-top"
              alt="mens-clothings"
              width={300}
              height={350}
              layout="responsive"
            />
            <div className="card-body text-info">
              <h5 className="card-title fw-bold fs-3 border-bottom border-info">
                Electronics
              </h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card content.
              </p>
              <div className="d-grid">
                <a href="#" className="btn btn-lg btn-primary fw-bold">
                  GO
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Homepage;
