import React from "react";
import "./Analytics.css";

const Analytics = () => {
  return (
    <section id="features" className="features">
      <div className="container">
        <div className="tab-content" data-aos="fade-up">
          <div className="tab-pane active show" id="tab-1">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>Weather Data Analysis In Our App</h3>
                <p>
                  This feature enhances user experience. Users can plan their
                  activities, events, and trips better by having access to
                  accurate weather information. It also helps businesses to make
                  informed decisions about scheduling and staffing, leading to
                  increased efficiency and productivity. It also improves safety
                  by providing up-to-date weather alerts, warnings, and
                  information about severe weather conditions. This information
                  can help users avoid dangerous situations and stay safe during
                  extreme weather events. Additionally, weather analysis on the
                  website, we help build trust and credibility among users. By
                  providing accurate and reliable weather information, we
                  establish ourselves as trustworthy sources of information,
                  leading to increased user engagement and retention.
                </p>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 text-center">
                <img
                  src="/public/assets/analytics.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
