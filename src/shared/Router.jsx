// // import { BrowserRouter, Route, Routes } from "react-router-dom";
// // import Home from "../pages/Home";
// // import Detail from "../pages/Detail";
// // import { v4 as uuidv4 } from "uuid";

// // const Router = () => {
// //   const initialState = [
// //     {
// //       id: uuidv4(),
// //       Date: "2024-01-05",
// //       list: "식비",
// //       money: "100000",
// //       detail: "세광양대창",
// //     },
// //     {
// //       id: uuidv4(),
// //       Date: "2024-01-10",
// //       list: "도서",
// //       money: "40500",
// //       detail: "모던 자바 스크립트",
// //     },
// //     {
// //       id: uuidv4(),
// //       Date: "2024-02-02",
// //       list: "식비",
// //       money: "50000",
// //       detail: "회식",
// //     },
// //     {
// //       id: uuidv4(),
// //       Date: "2024-02-02",
// //       list: "미용",
// //       money: "155000",
// //       detail: "미용실",
// //     },
// //   ];

// //   return (
// //     <BrowserRouter>
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/detail/:id" element={<Detail />} />{" "}
// //       </Routes>
// //     </BrowserRouter>
// //   );
// // };

// // export default Router;

// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "../pages/Home";
// import Detail from "../pages/Detail";
// import { v4 as uuidv4 } from "uuid";
// import { useState } from "react";

// const Router = () => {
//   const initialState = [
//     {
//       id: uuidv4(),
//       Date: "2024-01-05",
//       list: "식비",
//       money: "100000",
//       detail: "세광양대창",
//     },
//     {
//       id: uuidv4(),
//       Date: "2024-01-10",
//       list: "도서",
//       money: "40500",
//       detail: "모던 자바 스크립트",
//     },
//     {
//       id: uuidv4(),
//       Date: "2024-02-02",
//       list: "식비",
//       money: "50000",
//       detail: "회식",
//     },
//     {
//       id: uuidv4(),
//       Date: "2024-02-02",
//       list: "미용",
//       money: "155000",
//       detail: "미용실",
//     },
//   ];
//   const [data] = useState(initialState);

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/detail/:id" element={<Detail data={data} />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default Router;
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

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
      <Routes>
        <Route path="/" element={<Home data={data} setData={setData} />} />
        <Route
          path="/detail/:id"
          element={<Detail data={data} setData={setData} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
