import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { APP } from "./constants/index";

const MainContainer = React.lazy(() =>
  import("./components/main/containers/MainContainer")
);

const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path={APP.ROUTES.LANDING} element={<MainContainer />} />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default Router;
