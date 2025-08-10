import "./App.css";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/notFound/notFound";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard.jsx";
import LinkerPage from "./LinkerPage.jsx/LinkerPage.jsx";
import SideNavBar from "./components/sideNavBar/sideNavBar.jsx";
import LandingPage from "./pages/home/home.jsx";
import SignIn from "./pages/signIn/signIn.jsx";
import SignUp from "./pages/signUp/signUp.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route
        path="/Dashboard"
        element={<LinkerPage State={SideNavBar} pageName="Dashboard" />}
      >
        <Route path="" element={<AdminDashboard />} />
      </Route>
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
