import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Faq() {
  return (
    <div className="container py-4 my-5">
      <p className="h1 text-center text-shadow ">ByteBuddy FAQ's</p>
      <div
        className="accordion accordion-flush my-5"
        id="accordionFlushExample"
      >
        <div className="accordion-item border-0 mb-5">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed shadow rounded-5 btn btn-outline-primary fw-bold fs-5   "
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
              Creating an account is simple! Click on the “Sign Up” button on
              the homepage, fill in your details, and follow the instructions to
              complete registration.
            </div>
          </div>
        </div>

        <div className="accordion-item border-0 mb-5">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed shadow rounded-5 btn btn-outline-primary  fw-bold fs-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Can I use ByteBuddy without creating an account?
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body p-5 fs-5">
              Yes, you can browse and view available items without an account.
              However, you’ll need to sign up or log in to place an order.
            </div>
          </div>
        </div>

        <div className="accordion-item border-0 mb-5">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed shadow rounded-5 btn btn-outline-primary   fw-bold fs-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              I forgot my password. How do I reset it?
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body p-5 fs-5">
              Go to the login page and click “Forgot Password.” Enter your
              email, and we’ll send you instructions to reset your password.
            </div>
          </div>
        </div>

        <div className="accordion-item border-0 mb-5">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed shadow rounded-5 btn btn-outline-primary  fw-bold fs-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              How do I place an order on ByteBuddy?
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body p-5 fs-5">
              Simply browse through our categories, select the items you want,
              add them to your cart, and proceed to checkout. Follow the
              on-screen instructions to confirm your order.
            </div>
          </div>
        </div>

        <div className="accordion-item border-0 mb-5">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed shadow rounded-5 btn btn-outline-primary  fw-bold fs-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFive"
              aria-expanded="false"
              aria-controls="flush-collapseFive"
            >
              What payment methods does ByteBuddy accept?
            </button>
          </h2>
          <div
            id="flush-collapseFive"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body p-5 fs-5">
              We accept all major credit and debit cards, digital wallets, and
              cash on delivery in select areas.
            </div>
          </div>
        </div>

        <div className="accordion-item border-0 mb-5">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed shadow rounded-5 btn btn-outline-primary  fw-bold fs-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseSix"
              aria-expanded="false"
              aria-controls="flush-collapseSix"
            >
              What should I do if my payment fails?
            </button>
          </h2>
          <div
            id="flush-collapseSix"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body p-5 fs-5">
              Please try another payment method or check with your bank. If
              issues persist, contact our support team for assistance.
            </div>
          </div>
        </div>

        <div className="accordion-item border-0 mb-5">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed shadow rounded-5 btn btn-outline-primary  fw-bold fs-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseSeven"
              aria-expanded="false"
              aria-controls="flush-collapseSeven"
            >
              How long will it take for my order to arrive?
            </button>
          </h2>
          <div
            id="flush-collapseSeven"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body p-5 fs-5">
              Delivery times vary depending on your location and the
              restaurant’s preparation time. An estimated delivery time is
              provided during checkout.
            </div>
          </div>
        </div>

        <div className="accordion-item border-0 mb-5">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed shadow rounded-5 btn btn-outline-primary  fw-bold fs-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseEight"
              aria-expanded="false"
              aria-controls="flush-collapseEight"
            >
              What should I do if my order is late?
            </button>
          </h2>
          <div
            id="flush-collapseEight"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body p-5 fs-5">
              We apologize for any delay. You can contact our customer service
              team, who will check with the restaurant and the delivery partner
              to resolve the issue promptly.
            </div>
          </div>
        </div>

        <div className="accordion-item border-0 mb-5">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed shadow rounded-5 btn btn-outline-primary  fw-bold fs-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseNine"
              aria-expanded="false"
              aria-controls="flush-collapseNine"
            >
              Is there a delivery fee?
            </button>
          </h2>
          <div
            id="flush-collapseNine"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body p-5 fs-5">
              Delivery fees depend on your location and the restaurant. You’ll
              see any applicable fees at checkout.
            </div>
          </div>
        </div>

        <div className="accordion-item border-0 mb-5">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed shadow rounded-5 btn btn-outline-primary fw-bold fs-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTen"
              aria-expanded="false"
              aria-controls="flush-collapseTen"
            >
              ByteBuddy is not loading properly on my device. What should I do?
            </button>
          </h2>
          <div
            id="flush-collapseTen"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body p-5 fs-5">
              First, check your internet connection. If the issue persists, try
              clearing your browser’s cache or using another device. Contact us
              if the problem continues.
            </div>
          </div>
        </div>

        <div className="accordion-item border-0 mb-5">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed shadow rounded-5 btn btn-outline-primary fw-bold fs-5"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapse11"
              aria-expanded="false"
              aria-controls="flush-collaps11"
            >
              I’m having trouble with notifications. How can I enable them?
            </button>
          </h2>
          <div
            id="flush-collapse11"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body p-5 fs-5">
              Go to your device’s settings, find ByteBuddy under Apps, and
              enable notifications to stay updated on order statuses and
              promotions.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
