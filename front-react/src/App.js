import React from "react";
import WelcomePage from "./pages/WelcomPage/welcomPage";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <WelcomePage />
    </Router>
  );
}

export default App;
