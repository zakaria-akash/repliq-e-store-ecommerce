/* eslint-disable react/no-unescaped-entities */
import Image from "next/legacy/image";
import Link from "next/link";
import Head from "next/head";
import React, { Fragment } from "react";

const Homepage = () => {
  let headTagForThisPage = (
    <Head>
      <title>REPLIQ</title>
      <meta name="description" content="REPLIQ || Home Page" />
    </Head>
  );
  return (
    <Fragment>
      {headTagForThisPage}
      <div className="container mt-3 rounded bg-transparent">
        <div className="row d-flex align-items-center border-bottom border-3 border-info">
          <div className="col-sm-12 col-md-8 mt-4 p-5 text-white">
            <h1>REPLIQ E-MART</h1>
            <p>
              We are a team of passionate designers and developers who love
              building great digital products and experiences.
            </p>
          </div>
          <div className="col-sm-12 col-md-4 mt-4 p-5 text-white">
            <Image
              src="/images/logo.jpg"
              alt="logo"
              width="100"
              height="100"
              layout="responsive"
              style={{ zIndex: "-100" }}
            />
          </div>
        </div>
      </div>
      <div className="container mt-5 mb-5 ms-auto me-auto">
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
                <Link
                  href="/mensclothings"
                  className="btn btn-lg btn-primary fw-bold"
                >
                  GO
                </Link>
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
                <Link
                  href="/womensclothings"
                  className="btn btn-lg btn-primary fw-bold"
                >
                  GO
                </Link>
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
                <Link
                  href="/jewelery"
                  className="btn btn-lg btn-primary fw-bold"
                >
                  GO
                </Link>
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
                <Link
                  href="/electronics"
                  className="btn btn-lg btn-primary fw-bold"
                >
                  GO
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Homepage;
