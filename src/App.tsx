import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import AboutPage from "./Components/About/AboutPage";
import ProductsPage from "./Components/Products/ProductsPage";
import ProductPage from "./Components/Products/ProductPage";
import Header from "./Components/Header";
import AdminPanel from "./admin";
import LoginPage from "./Components/Loginpage";
import PrivateRoute from "./PrivateRoute";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    const isAuthenticated = Boolean(localStorage.getItem("username"));
    setAuthenticated(isAuthenticated);
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/about"
          element={
            <PrivateRoute>
              <AboutPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/products"
          element={
            <PrivateRoute>
              <ProductsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/products/:id"
          element={
            <PrivateRoute>
              <ProductPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminPanel />
            </PrivateRoute>
          }
        />

        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
