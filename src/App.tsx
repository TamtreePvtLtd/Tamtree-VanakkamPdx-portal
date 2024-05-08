import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import { paths } from "./router/paths";
import Home from "./pages/home/Home";
import CateringPage from "./pages/catering/CateringPage";
import AboutUs from "./pages/about us/AboutUs";
import Login from "./pages/discount page/Login";
import SnackBarProvider from "./context/SnackBarContext";
import CustomSnackBar from "./common/components/CustomSnackbar";

function App() {
  return (
    <>
          <SnackBarProvider>
      <BrowserRouter>
        <Routes>
          <Route path={paths.ROOT} element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={paths.HOME} element={<Home />} />
            <Route path={paths.CATERING} element={<CateringPage />} />
            <Route path={paths.ABOUTUS} element={<AboutUs />} />
            <Route path={paths.DISCOUNT} element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <CustomSnackBar />
      </SnackBarProvider>
    </>
  );
}

export default App;
