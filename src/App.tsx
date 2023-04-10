import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AstronomyDataProvider } from "./contexts/AstronomyData";
import { ForecastDataProvider } from "./contexts/ForecastData";
import { RealtimeDataProvider } from "./contexts/RealtimeData";
import AstronomyDataList from "./features/astronomyData/AstronomyDataList";
import Footer from "./features/footer/Footer";
import ForecastDataList from "./features/forecastData/ForecastDataList";
import Navigation from "./features/header/Navigation";
import Main from "./features/pages/Main";
import RealtimeDataList from "./features/realtimeData/RealtimeDataList";

const App = () => {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <ForecastDataProvider>
        <AstronomyDataProvider>
          <RealtimeDataProvider>
            <Router>
              <Navigation />
              <Routes>
                <Route path="/" element={<Main />} />
                <Route
                  path="/service-realtime"
                  element={<RealtimeDataList />}
                />
                <Route
                  path="/service-astronomy"
                  element={<AstronomyDataList />}
                />
                <Route
                  path="/service-forecast"
                  element={<ForecastDataList />}
                />
              </Routes>
            </Router>
          </RealtimeDataProvider>
        </AstronomyDataProvider>
      </ForecastDataProvider>
      <div style={{ padding: "30px" }}></div>
      <Footer />
    </div>
  );
};

export default App;
