import React from "react";
import "./Footer.css";

const Footer = () => {
  const today: Date = new Date();
  const year: number = today.getFullYear();
  return (
    <footer id="footer">
      <div className="container px-4 px-lg-5 mt-12">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            <div
              className="small text-center text-muted fst-italic"
              style={{ padding: "10px" }}
            >
              Copyright &copy; The Weather Site {year}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
