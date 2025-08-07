import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <ThemeProvider theme={theme}> */}
    <BrowserRouter>
      <ToastContainer position="top-right" autoClose={3000} />
      <App />
    </BrowserRouter>
    {/* </ThemeProvider> */}
  </StrictMode>
);
