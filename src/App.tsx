import { Route, Routes } from "react-router";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import LoginPage from "./components/AuthPages/components/LoginPage/LoginPage";
import RegisterPage from "./components/AuthPages/components/RegisterPage/RegisterPage";

function App() {
  return (
    <Routes>
      <Route
        index
        element={<WelcomePage />}
      />
      <Route
        path="/login"
        element={<LoginPage />}
      />
      <Route
        path="/register"
        element={<RegisterPage />}
      />
      <Route />
    </Routes>
  );
}

export default App;
