import { Route, Routes } from "react-router-dom";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import LoginPage from "./components/AuthPages/components/LoginPage/LoginPage";
import RegisterPage from "./components/AuthPages/components/RegisterPage/RegisterPage";
import MainPage from "./components/MainPage/MainPage";
import { useAppDispatch } from "./store/hooks";
import { getTokenFromLocalStorage } from "./helpers/localstorage.helper";
import { AuthService } from "./services/auth.service";
import { login, logout } from "./store/user/user.slice";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import UploadPage from "./components/UploadPage/UploadPage";
import UploadSongPage from "./components/UploadPage/UploadSongPage/UploadSongPage";

function App() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const checkAuth = async () => {
    const token = getTokenFromLocalStorage();

    try {
      if (token) {
        const data = await AuthService.getProfile();

        if (data) {
          dispatch(login(data));
        } else {
          dispatch(logout());
          navigate("../user/login");
          toast.warn("Please, sign on!", {
            position: "bottom-left",
            theme: "colored",
            autoClose: 3000,
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <>
      <Routes>
        {/* Public routes */}
        <Route
          index
          element={<WelcomePage />}
        />
        <Route
          path="/user/login"
          element={<LoginPage />}
        />
        <Route
          path="/user/registration"
          element={<RegisterPage />}
        />

        {/* Protected routes - nested inside MainPage layout */}
        <Route
          path="/main"
          element={<MainPage />}
        >
          <Route
            index
            element={<div>Main Content</div>}
          />{" "}
          {/* Добавляем индексный роут */}
          <Route
            path="profile"
            element={<ProfilePage />}
          />
          <Route
            path="uploader"
            element={<UploadPage />}
          />
          <Route
            path="upload"
            element={<UploadSongPage />}
          />
          {/* Add other nested routes here */}
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
