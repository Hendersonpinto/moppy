import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
      <div className="jumbotron jumbotron-fluid bg-transparent">
        <div className="container secondary-color">
          <h1 className="display-4">Moppy</h1>
          <p className="lead">
            Connecting home owners with their next superhero{" "}
          </p>
          <hr className="my-4" />
          <Link to="/cleaners" className="btn btn-lg">
            View cleaners
          </Link>
          <Link to="/hosts" className="btn btn-lg">
            View hosts
          </Link>
          <Link to="/all_sessions" className="btn btn-lg">
            View sessions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
