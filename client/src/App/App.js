import React from "react";
import MainPage from "../MainPage/MainPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route path="/:currentEmployer" children={<MainPage />} />
    </Router>
  );
};

export default App;
