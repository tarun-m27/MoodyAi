import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">

                {/* <p>{props.data ? props.data.paragraph : "Loading"}</p> */}
                <h3
                style={{ marginLeft: "400px" }}>
                  Your daily vibe check, in one journal</h3>
                <a
                  href="/signin"
                  className="btn btn-custom btn-lg page-scroll"
                  style={{ marginLeft: "400px" }}
                >
                  Get started
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
