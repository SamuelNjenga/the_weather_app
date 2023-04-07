import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { RealtimeDataProvider } from "./contexts/RealtimeData";
import { AstronomyDataProvider } from "./contexts/AstronomyData";

import Navigation from "./features/header/Navigation";
import Main from "./features/pages/Main";
import RealtimeDataList from "./features/realtimeData/RealtimeDataList";
import AstronomyDataList from './features/astronomyData/AstronomyDataList';

const App = () => {
  return (
    <div>
      <AstronomyDataProvider>
        <RealtimeDataProvider>
          <Router>
            <Navigation />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/service-realtime" element={<RealtimeDataList />} />
              <Route
                path="/service-astronomy"
                element={<AstronomyDataList />}
              />
            </Routes>
          </Router>
        </RealtimeDataProvider>
      </AstronomyDataProvider>
    </div>
  );
};

export default App;
