import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RealtimeDataProvider } from "./contexts/RealtimeData";
import Navigation from "./features/header/Navigation";
import Main from "./features/pages/Main";
import RealtimeDataList from "./features/realtimeData/RealtimeDataList";

const App = () => {
  return (
    <div>
      <RealtimeDataProvider>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/service-realtime" element={<RealtimeDataList />} />
          </Routes>
        </Router>
      </RealtimeDataProvider>
    </div>
  );
};

export default App;
