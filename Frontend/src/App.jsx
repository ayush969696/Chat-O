import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import DashBoard from "./modules/Dashboard/DashBoard";

const ProtectedRoutes = ({ children }) => {
  const isLoggedIn = localStorage.getItem("user:token") !== null || true;

  if (!isLoggedIn) {
    return <Navigate to={"/users/login"} />;
  } else if (
    isLoggedIn &&
    ["/users/register", "/users/login"].includes(window.location.pathname)
  ) {

    console.log("object: >>", isLoggedIn);
    return <Navigate to="/" />;
  }

  return children;
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <DashBoard />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/users/register"
          element={
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/users/login"
          element={
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          }
        />
        {/* <Route path="/dashBoard"  element={<DashBoard />} /> */}
      </Routes>
    </div>
  );
}

export default App;
