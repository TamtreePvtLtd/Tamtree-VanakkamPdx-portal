import "./App.css";
import Home from "./pages/home/Home";

import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import SecNavbar from "./pages/home/SecNavbar";
import CateringCard from "./pages/catering/CateringCard";

function App() {
  return (
    <>
      <Navbar />
      <CateringCard />
      <Home />
      <SecNavbar />
      <Footer />
    </>
  );
}

export default App;
