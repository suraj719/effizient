import React from "react";
import { Link } from "react-router-dom";

export default function Success() {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center" style={{height:"100vh"}}>
        
        <div className="d-flex flex-column w-50 inp-card">
        <img
        className="align-self-center"
          src="../banner.png"
          alt="banner-effizient"
          style={{ width: "20rem" }}
        />
          <p className="text-center fw-bold fs-3">
            ✨Customized SOP Generator✨
          </p>
          <p className="fs-5 fw-semibold">
            Thanks for using our customized SOP Generator. You will receive a
            customized SOP on the email you provided in this form. Feel free to
            use and edit it as you see fit.
          </p>
          <p className=" fw-bold mt-4">Good luck with your application!</p>
          <div>
            <Link to='/'>Submit another application ?</Link>
          </div>
        </div>
      </div>
    </>
  );
}
