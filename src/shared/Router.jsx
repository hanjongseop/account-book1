import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Login from "../pages/Login";
import GlobalStyle from "../GlobalStyle";
import SignUp from "../pages/SignUp";

const Router = () => {
  const initialState = [
    {
      id: uuidv4(),
      Date: "2024-01-05",
      list: "식비",
      money: "100000",
      detail: "세광양대창",
    },
    {
      id: uuidv4(),
      Date: "2024-01-10",
      list: "도서",
      money: "40500",
      detail: "모던 자바 스크립트",
    },
    {
      id: uuidv4(),
      Date: "2024-02-02",
      list: "식비",
      money: "50000",
      detail: "회식",
    },
    {
      id: uuidv4(),
      Date: "2024-02-02",
      list: "미용",
      money: "155000",
      detail: "미용실",
    },
  ];
  const [data, setData] = useState(initialState);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home data={data} setData={setData} />} />
        <Route
          path="/detail/:id"
          element={<Detail data={data} setData={setData} />}
        />
        <Route
          path="/Login"
          element={<Login data={data} setData={setData} />}
        />
        <Route
          path="/Signup"
          element={<SignUp data={data} setData={setData} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
