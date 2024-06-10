import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import InputAdd from "../components/InputAdd";

function Detail({ data, setData }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const expense = data.find((item) => item.id === id);

  const [updatedDate, setUpdatedDate] = useState(expense.Date);
  const [updatedList, setUpdatedList] = useState(expense.list);
  const [updatedMoney, setUpdatedMoney] = useState(expense.money);
  const [updatedDetail, setUpdatedDetail] = useState(expense.detail);

  const handleUpdate = () => {
    const updatedExpense = {
      id,
      Date: updatedDate,
      list: updatedList,
      money: updatedMoney,
      detail: updatedDetail,
    };

    const updatedData = data.map((item) =>
      item.id === id ? updatedExpense : item
    );

    setData(updatedData);
    navigate("/");
  };
  const handleDelete = () => {
    const updatedData = data.filter((item) => item.id !== id);

    setData(updatedData);
    navigate("/");
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h2>Detail Page</h2>

      <InputAdd
        label="날짜"
        type="DATE"
        value={updatedDate}
        onChange={(e) => setUpdatedDate(e.target.value)}
      />
      <InputAdd
        label="항목"
        type="text"
        value={updatedList}
        onChange={(e) => setUpdatedList(e.target.value)}
      />
      <InputAdd
        label="금액"
        type="number"
        value={updatedMoney}
        onChange={(e) => setUpdatedMoney(e.target.value)}
      />
      <InputAdd
        label="내용"
        type="text"
        value={updatedDetail}
        onChange={(e) => setUpdatedDetail(e.target.value)}
      />
      <button onClick={handleUpdate}>수정</button>
      <button onClick={handleDelete}>삭제</button>
      <button onClick={handleBack}>뒤로가기</button>
    </div>
  );
}

export default Detail;
