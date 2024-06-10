// import { useState } from "react";
// import GlobalStyle from "../GlobalStyle";
// import styled from "styled-components";

// const Month = () => {
//   const [month, setMonth] = useState();
//   const monthAll = [
//     "1월",
//     "2월",
//     "3월",
//     "4월",
//     "5월",
//     "6월",
//     "7월",
//     "8월",
//     "9월",
//     "10월",
//     "11월",
//     "12월",
//   ];
//   const handelMonthClick = (month) => {
//     setMonth(month);
//   };
//   const Button = styled.button`
//     background-color: black;
//     color: yellow;
//     padding: 10px 20px;
//     border: none;
//     border-radius: 5px;
//     cursor: pointer;
//     font-size: 18px;
//     margin: 0 auto;
//     width: 150px;
//     height: 60px;
//   `;
//   const Div1 = styled.div`
//     padding: 10px;
//   `;
//   const Section = styled.section`
//     background-color: aqua;
//     max-width: 800px;
//     display: flex;
//     flex-direction: row;
//     flex-wrap: wrap;
//     justify-content: center;
//     margin: 0 auto;
//     border: 1px solid black;
//     border-radius: 10px;
//     padding: 10px 10px;
//   `;
//   const Div2 = styled.div`
//     background-color: aqua;
//     max-width: 800px;
//     border: 1px solid black;
//     border-radius: 10px;
//     padding: 10px 10px;
//     margin: 0 auto;
//     margin-top: 20px;
//   `;
//   return (
//     <div>
//       <GlobalStyle />
//       <Section>
//         {monthAll.map((month) => (
//           <Div1 key={month}>
//             <Button onClick={() => handelMonthClick(month)}>{month}</Button>
//           </Div1>
//         ))}
//       </Section>
//       <Div2>{month} 총 지출액</Div2>
//       <section>
//         <Div2>{month}내역</Div2>
//       </section>
//     </div>
//   );
// };

// export default Month;
