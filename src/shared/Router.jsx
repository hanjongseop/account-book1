import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import { useState } from "react";
import Login from "../pages/Login";
import GlobalStyle from "../GlobalStyle";
import SignUp from "../pages/SignUp";
import Header from "../components/Header";

const Router = () => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Header user={user} setUser={setUser} />}>
          <Route
            index
            element={<Home user={user} data={data} setData={setData} />}
          />
          <Route
            path="/detail/:id"
            element={<Detail data={data} setData={setData} />}
          />
        </Route>
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
