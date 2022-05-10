import WelcomPage from "./pages/WelcomPage/welcomPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./pages/SignUp/signUpPage.css";
import Main from "./pages/MainPage/Main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/MainPage" element={<Main />} />
      </Routes>
      <WelcomPage />
    </Router>
  );
}

export default App;
