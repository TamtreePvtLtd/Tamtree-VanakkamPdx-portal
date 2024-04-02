import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import { paths } from "./router/paths";
import Home from "./pages/home/Home";
import MenuCard from "./pages/menus/MenuCard";
import CateringPage from "./pages/catering/CateringPage";
import AboutUs from "./pages/about us/AboutUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={paths.ROOT} element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={paths.HOME} element={<Home />} />
            <Route path={paths.MENU} element={<MenuCard />} />
            <Route path={paths.CATERING} element={<CateringPage />} />
            <Route path={paths.ABOUTUS} element={<AboutUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
