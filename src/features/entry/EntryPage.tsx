import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Button } from "@mui/material";
import React from "react";
import EntryAnimation from "./EntryAnimation";
import "./EntryPage.css";

const EntryPage = () => {
  return (
    <div>
      <section
        id="hero"
        className="d-flex flex-column justify-content-end align-items-center"
      >
        <div
          id="heroCarousel"
          data-bs-interval="5000"
          className="container carousel carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-item active">
            <div className="carousel-container">
              <h2 className="animate__animated animate__fadeInDown">
                Realtime Data
              </h2>
              <p className="animate__animated fanimate__adeInUp">
                Check out our Real-time weather data which is critical for
                predicting and preparing for weather events. With the help of
                advanced technology and sensors, weather data is collected and
                processed to provide accurate and timely forecasts. This data is
                vital for industries such as agriculture, transportation, and
                emergency management.
              </p>
              <Button className="btn-get-started animate__animated animate__fadeInUp scrollto">
                Read More
              </Button>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-container">
              <h2 className="animate__animated animate__fadeInDown">
                Forecast Data
              </h2>
              <p className="animate__animated animate__fadeInUp">
                View vital information about upcoming weather conditions. See
                analyzed atmospheric data enabling you to predict
                changes in temperature, precipitation, and other meteorological
                factors. Accurate forecasts can help in planning your activities
                and staying safe during extreme weather events.
              </p>
              <Button className="btn-get-started animate__animated animate__fadeInUp scrollto">
                Read More
              </Button>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-container">
              <h2 className="animate__animated animate__fadeInDown">
                Astronomy Data
              </h2>
              <p className="animate__animated animate__fadeInUp">
                Check out Astronomy data which plays an important role in
                predicting and understanding weather patterns. View the
                Astronomical events like solar flares, eclipses, and the
                position of the moon which can affect atmospheric conditions and
                have an impact on weather forecasting.
              </p>
              <Button className="btn-get-started animate__animated animate__fadeInUp scrollto">
                Read More
              </Button>
            </div>
          </div>

          <a
            className="carousel-control-prev"
            data-bs-target="#heroCarousel"
            role="button"
            data-bs-slide="prev"
          >
            <ChevronLeftIcon className="carousel-control-next-icon bx bx-chevron-right" />
          </a>
          <a
            className="carousel-control-next"
            data-bs-target="#heroCarousel"
            role="button"
            data-bs-slide="next"
          >
            <ChevronRightIcon className="carousel-control-next-icon bx bx-chevron-right" />
          </a>
        </div>
        <EntryAnimation />
      </section>
    </div>
  );
};

export default EntryPage;
