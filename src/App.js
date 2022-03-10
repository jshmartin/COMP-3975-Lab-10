// Navigation
import NavBar from "./NavBar";
import Footer from "./Footer";
// My pages
import HomePage from "./pages/HomePage";
import PrivacyPage from "./pages/PrivacyPage";
import NotFoundPage from './pages/NotFoundPage';

// Bootstrap stuff
import "bootstrap/dist/css/bootstrap.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";


// Routing stuff
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/privacy" element={<PrivacyPage />} exact />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer/>
      </BrowserRouter> 
    </div>
  );
}

export default App;
