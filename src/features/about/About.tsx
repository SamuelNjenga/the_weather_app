import CheckIcon from "@mui/icons-material/Check";
import React from "react";
import { Button } from "react-bootstrap";
import "./About.css";
import Section from "./Section";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <Section />
        <div className="row content" data-aos="fade-up">
          <div className="col-lg-6">
            <p>
              Some of the benefits which are contained in our online platform.
            </p>
            <ul>
              <li>
                <i className="ri-check-double-line">
                  <CheckIcon />
                </i>
                We help users in Forecasting as well as Alerting them on the
                current weather conditions. We provide users with up-to-date
                weather information and alerts about severe weather conditions.
              </li>
              <li>
                <i className="ri-check-double-line">
                  <CheckIcon />
                </i>
                We help farmers make informed decisions about crop management.
                By analyzing weather data, farmers can determine the best times
                to plant and harvest crops, as well as make decisions about
                irrigation and other farming practices.
              </li>
              <li>
                <i className="ri-check-double-line">
                  <CheckIcon />
                </i>
                We provide Weather data views which provide real-time updates on
                weather conditions. This allows businesses to make informed
                decisions about shipping routes, travel schedules, and other
                logistical considerations.
              </li>
            </ul>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <p>
              Our mission is to help people stay informed about the weather in
              their area, no matter where they are. We believe that everyone
              should have access to accurate and timely weather information, and
              our app is our way of making that happen.
            </p>
            <p>
              Our app is designed to give you accurate, up-to-date weather
              information so you can plan your day with confidence. We source
              our weather data from a variety of trusted providers, and we
              update our information frequently to ensure that our users always
              have the most current data available.
            </p>
            <p>
              We're constantly working to improve our app and add new features,
              so be sure to check back often for updates.Thank you for choosing
              us!
            </p>
            <Button className="btn-learn-more">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
