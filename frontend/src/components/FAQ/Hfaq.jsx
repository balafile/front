import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from "react-router-dom";


function Hfaq() {
  return (
    <>
      <div className="container mt-5">
        <p className="capitalize text-center h3">FAQ</p>
        <p className="fw-bold h2 text-center">Frequently Asked Questions</p>
        <p className="text-center">Get your doubts clarified..!</p>
      </div>

      <div className="container w-100 ">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2">
          <div className="col">
            <div
              className="accordion accordion-flush my-5"
              id="accordionFlushExample"
            >
              <div className="accordion-item border-0 mb-5">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed shadow rounded-5 btn btn-outline-primary fw-bold fs-5"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    How do I create an account on ByteBuddy?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body p-5 fs-5">
                    Creating an account is simple! Click on the “Sign Up” button
                    on the homepage, fill in your details, and follow the
                    instructions to complete registration.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="accordion accordion-flush my-5"
              id="accordionFlushExample1"
            >
              <div className="accordion-item border-0 mb-5">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed shadow rounded-5 btn btn-outline-primary fw-bold fs-5   "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    How do I create an account on ByteBuddy?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample1"
                >
                  <div className="accordion-body p-5 fs-5">
                    Creating an account is simple! Click on the “Sign Up” button
                    on the homepage, fill in your details, and follow the
                    instructions to complete registration.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="accordion accordion-flush my-5"
              id="accordionFlushExample2"
            >
              <div className="accordion-item border-0 mb-5">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed shadow rounded-5 btn btn-outline-primary fw-bold fs-5   "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    How do I create an account on ByteBuddy?
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample2"
                >
                  <div className="accordion-body p-5 fs-5">
                    Creating an account is simple! Click on the “Sign Up” button
                    on the homepage, fill in your details, and follow the
                    instructions to complete registration.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="accordion accordion-flush my-5"
              id="accordionFlushExample3"
            >
              <div className="accordion-item border-0 mb-5">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed shadow rounded-5 btn btn-outline-primary fw-bold fs-5   "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                  >
                    How do I create an account on ByteBuddy?
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample3"
                >
                  <div className="accordion-body p-5 fs-5">
                    Creating an account is simple! Click on the “Sign Up” button
                    on the homepage, fill in your details, and follow the
                    instructions to complete registration.
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <Link to='/faq' className="btn btn-outline-primary rounded-5 px-4 mb-5 fs-5">View All</Link>
      </div>
      
    </>
  );
}

export default Hfaq;
