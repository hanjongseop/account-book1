import { useState, useEffect } from "react";
import GlobalStyle from "../GlobalStyle";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import InputAdd from "../components/InputAdd";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addExpense, getExpenses } from "../lib/api/json";

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

function Home({ data, user }) {
  const [moneyList, setMoneyList] = useState(data);
  const [newDate, setNewDate] = useState("");
  const [newItem, setNewItem] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [month, setMonth] = useState("");
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    data: expense = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["expense"],
    queryFn: getExpenses,
  });

  const mutation = useMutation({
    mutationFn: addExpense,
    onSuccess: () => {
      queryClient.invalidateQueries("expense");
    },
    onError: (error) => {},
  });

  useEffect(() => {
    if (expense.length > 0) {
      setMoneyList(expense);
    }
  }, [expense]);

  const handleAddExpense = () => {
    if (!user) {
      alert("로그인 후 사용 가능합니다.");
      return;
    }
    const newExpense = {
      id: uuidv4(),
      month: parseInt(newDate.split("-")[1], 10),
      date: newDate,
      item: newItem,
      amount: newAmount,
      description: newDescription,
      createdBy: user.nickname,
    };
    mutation.mutate(newExpense);
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

  const handleMonthClick = (month) => {
    setMonth(month);
  };

  const selectMonth = moneyList.filter((expense) => {
    const expenseMonth = new Date(expense.date).getMonth();
    return monthAll[expenseMonth] === month;
  });

  const totalAmount = selectMonth.reduce(
    (sum, expense) => sum + Number(expense.amount),
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
            type="date"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
          />
          <InputAdd
            label="항목"
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <InputAdd
            label="금액"
            type="number"
            value={newAmount}
            onChange={(e) => setNewAmount(e.target.value)}
          />
          <InputAdd
            label="내용"
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button onClick={handleAddExpense}>추가</button>
        </section>

        <div>
          <GlobalStyle />
          <Section>
            {monthAll.map((month) => (
              <Div1 key={month}>
                <Button onClick={() => handleMonthClick(month)}>{month}</Button>
              </Div1>
            ))}
          </Section>
          <Div2>
            {month} 총 지출액
            <div>금액: {totalAmount.toLocaleString()}원</div>
          </Div2>
          <section>
            <Div2>
              {month} 내역
              <ul>
                {selectMonth.map((expense) => (
                  <Line1
                    key={expense.id}
                    onClick={() => handleItemClick(expense.id)}
                  >
                    <div>날짜: {expense.date}</div>
                    <div>항목: {expense.item}</div>
                    <div>금액: {Number(expense.amount).toLocaleString()}원</div>
                    <div>내용: {expense.description}</div>
                    <div>작성자: {expense.createdBy}</div>
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
