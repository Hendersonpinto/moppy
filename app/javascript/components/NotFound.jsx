import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
      <div className="jumbotron jumbotron-fluid bg-transparent">
        <div className="container secondary-color">
          <h1 className="display-4">404</h1>
          <p className="lead">
            The site you are trying to access does not exist{" "}
          </p>
          <hr className="my-4" />
          <Link to="/" className="btn btn-lg">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
