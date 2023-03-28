import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Main from "./features/pages/Main";

const App = () => {
  return (
    <div>
      <Router>
        {/* <Navigation /> */}
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
