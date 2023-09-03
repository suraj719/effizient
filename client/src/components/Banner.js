import React from "react";

export default function Banner() {
  return (
    <>
      <div 
      className="d-flex flex-column justify-content-center align-items-center"
      // className="w-50"
      >
        <div className="d-flex flex-column w-50 inp-card">
        <img className="align-self-center" src="../banner.png" alt="banner-effizient" style={{width:"20rem"}} />

        <p className="text-center fw-bold fs-3 text-decoration-underlin">
          {/* <img src="../cursor.png" alt="aero" style={{width:"3rem"}}/> */}
          ✨Customized SOP Generator✨</p>
        <p className="fs-5 fw-semibold">
          Fill this questionnaire for the student. After submitting, you will
          receive an email at the email address that you have provided with a
          Statement of Purpose customized for you. You can use and modify that
          as per your needs.
        </p>
        <p className=" fs-5 fw-semibold" >
          If you would like to get it edited, reviewed, or drafted by our
          experts, you can get in touch with us:
          <a href="https://effizient-immigration-inc.square.site/s/shop">
            https://effizient-immigration-inc.square.site/s/shop
          </a>
          </p>
          <hr />
          <span className="text-danger">* indicates required question</span>
        
        </div>
      </div>
    </>
  );
}
