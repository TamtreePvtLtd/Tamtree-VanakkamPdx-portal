import "./App.css";
import Home from "./pages/home/Home";

import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import SecNavbar from "./pages/home/SecNavbar";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <SecNavbar />
      <Footer />
    </>
  );
}

export default App;
