import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { RealtimeDataProvider } from "./contexts/RealtimeData";
import { AstronomyDataProvider } from "./contexts/AstronomyData";
import { ForecastDataProvider } from "./contexts/ForecastData";

import Navigation from "./features/header/Navigation";
import Main from "./features/pages/Main";
import RealtimeDataList from "./features/realtimeData/RealtimeDataList";
import AstronomyDataList from './features/astronomyData/AstronomyDataList';
import ForecastDataList from './features/forecastData/ForecastDataList';

const App = () => {
  return (
    <div>
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
    </div>
  );
};

export default App;
