// system
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";

// pages
import Auth from "./pages/Auth/Auth";
import UserDetail from "./pages/User/UserDetail/UserDetail";
import UserDashboard from "./pages/User/UserDashboard/UserDashboard";
import Error from "./pages/Error/Error";

// internal components
import Header from "./components/Header/Header";

function App() {
  const [accessToken, setAccessToken] = useState<string | null>(
    localStorage.getItem("access_token")
  );
  const [refreshToken, setRefreshToken] = useState<string | null>(
    localStorage.getItem("refresh_token")
  );
  const [hasError, setHasError] = useState(false);

  const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    return accessToken ? children : <Navigate to="/login" />;
  };

  useEffect(() => {
    if (accessToken) {
      localStorage.setItem("access_token", accessToken);
    } else {
      localStorage.removeItem("access_token");
    }

    if (refreshToken) {
      localStorage.setItem("refresh_token", refreshToken);
    } else {
      localStorage.removeItem("refresh_token");
    }
  }, [accessToken, refreshToken]);

  return (
    <Router>
      {accessToken && (
        <Header
          accessToken={accessToken}
          setAccessToken={setAccessToken}
          refreshToken={refreshToken}
          setRefreshToken={setRefreshToken}
        />
      )}

      <div>
        {hasError ? (
          <Error
            message="Houve um problema ao carregar os dados."
            onRetry={() => setHasError(false)}
          />
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <UserDashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/register"
              element={
                <Auth
                  setAccessToken={setAccessToken}
                  setRefreshToken={setRefreshToken}
                />
              }
            />
            <Route
              path="/login"
              element={
                <Auth
                  setAccessToken={setAccessToken}
                  setRefreshToken={setRefreshToken}
                />
              }
            />
            <Route
              path="/user"
              element={
                <PrivateRoute>
                  <UserDetail />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <UserDashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/auth"
              element={
                <Auth
                  setAccessToken={setAccessToken}
                  setRefreshToken={setRefreshToken}
                />
              }
            />
            <Route
              path="*"
              element={
                <Error
                  message="Página não encontrada."
                  onRetry={() => setHasError(false)}
                />
              }
            />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
