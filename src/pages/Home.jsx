import { useState } from "react";
import GlobalStyle from "../GlobalStyle";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import InputAdd from "../components/InputAdd";
import { useNavigate } from "react-router-dom";

const Button = styled.button`
  background-color: black;
  color: yellow;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  margin: 0 auto;
  width: 150px;
  height: 60px;
`;
const Div1 = styled.div`
  padding: 10px;
`;
const Section = styled.section`
  background-color: aqua;
  max-width: 800px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px 10px;
`;
const Div2 = styled.div`
  background-color: aqua;
  max-width: 800px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px 10px;
  margin: 0 auto;
  margin-top: 20px;
`;
const Line1 = styled.li`
  border: 1px solid black;
  border-radius: 10px;
  padding: 5px;
`;

function Home({ data, setData }) {
  const [moneyList, setMoneyList] = useState(data);
  const [newDate, setNewDate] = useState("");
  const [newList, setNewList] = useState("");
  const [newMoney, setNewMoney] = useState("");
  const [newDetail, setNewDetail] = useState("");
  const [month, setMonth] = useState("");
  const navigate = useNavigate();

  const handleAddExpense = () => {
    const newExpense = {
      id: uuidv4(),
      Date: newDate,
      list: newList,
      money: newMoney,
      detail: newDetail,
    };
    const updatedList = [...moneyList, newExpense];
    setMoneyList(updatedList);
    setData(updatedList);
  };

  const monthAll = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];
  const handelMonthClick = (month) => {
    setMonth(month);
  };

  const selectMonth = moneyList.filter((expense) => {
    const expenseMonth = new Date(expense.Date).getMonth();
    return monthAll[expenseMonth] === month;
  });

  const totalAmount = selectMonth.reduce(
    (sum, expense) => sum + Number(expense.money),
    0
  );

  const handleItemClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div id="root">
      <GlobalStyle />
      <main className="money-book">
        <section className="money-Input">
          <InputAdd
            label="날짜"
            type="Date"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
          />
          <InputAdd
            label="항목"
            type="text"
            value={newList}
            onChange={(e) => setNewList(e.target.value)}
          />
          <InputAdd
            label="금액"
            type="number"
            value={newMoney}
            onChange={(e) => setNewMoney(e.target.value)}
          />
          <InputAdd
            label="내용"
            type="text"
            value={newDetail}
            onChange={(e) => setNewDetail(e.target.value)}
          />
          <button onClick={handleAddExpense}>추가</button>
        </section>

        <div>
          <GlobalStyle />
          <Section>
            {monthAll.map((month) => (
              <Div1 key={month}>
                <Button onClick={() => handelMonthClick(month)}>{month}</Button>
              </Div1>
            ))}
          </Section>
          <Div2>
            {month} 총 지출액
            <div>금액: {totalAmount.toLocaleString()}원</div>
          </Div2>
          <section>
            <Div2>
              {month}내역{" "}
              <ul>
                {selectMonth.map((expense) => (
                  <Line1
                    key={expense.id}
                    onClick={() => handleItemClick(expense.id)}
                  >
                    <div>날짜: {expense.Date}</div>
                    <div>항목: {expense.list}</div>
                    <div>금액: {Number(expense.money).toLocaleString()}원</div>
                    <div>내용: {expense.detail}</div>
                  </Line1>
                ))}
              </ul>
            </Div2>
          </section>
        </div>
        <div></div>
      </main>
    </div>
  );
}

export default Home;
