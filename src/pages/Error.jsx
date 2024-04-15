import React from "react";
import { useRouteError, Link } from "react-router-dom";

function Error() {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <main className=" container-fluid min-vh-100 text-center  d-flex flex-column align-items-center justify-content-center gap-2">
        <span className="display-4 text-danger"> 404 </span>
        <h3 className=""> Page not found</h3>
        <p className="">Sorry we could not find the page you are looking for</p>
        <div className="mt-2">
          <Link to="/" className="btn btn-info">
            go back home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <>
      <main className=" container-fluid min-vh-100 text-center display-4 d-flex align-items-center justify-content-center">
        there was an error...
      </main>
    </>
  );
}

export default Error;
