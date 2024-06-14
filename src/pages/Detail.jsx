import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import InputAdd from "../components/InputAdd";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteExpense, getExpense, putExpense } from "../lib/api/json";

function Detail({ data, setData, user }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    data: selectedExpense,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["expense", id],
    queryFn: () => getExpense(id),
  });

  const mutation = useMutation({
    mutationFn: putExpense,
    onSuccess: () => {
      queryClient.invalidateQueries("expense");
    },
    onError: (error) => {},
  });
  const mutationDelete = useMutation({
    mutationFn: deleteExpense,
    onSuccess: () => {
      queryClient.invalidateQueries("expense");
    },
    onError: (error) => {},
  });

  const [updatedDate, setUpdatedDate] = useState("");
  const [updatedList, setUpdatedList] = useState("");
  const [updatedMoney, setUpdatedMoney] = useState("");
  const [updatedDetail, setUpdatedDetail] = useState("");

  useEffect(() => {
    if (selectedExpense) {
      setUpdatedDate(selectedExpense.date);
      setUpdatedList(selectedExpense.item);
      setUpdatedMoney(selectedExpense.amount);
      setUpdatedDetail(selectedExpense.description);
    }
  }, [selectedExpense]);

  const handleUpdate = () => {
    const updatedExpense = {
      id,
      date: updatedDate,
      item: updatedList,
      amount: parseInt(updatedMoney),
      description: updatedDetail,
      createdBy: selectedExpense.createdBy,
    };

    mutation.mutate(updatedExpense);

    const updatedData = data.map((item) =>
      item.id === id ? updatedExpense : item
    );

    setData(updatedData);
    navigate("/");
  };

  const handleDelete = () => {
    navigate("/");
    mutationDelete.mutate(id);
  };

  const handleBack = () => {
    navigate(-1);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Detail Page</h2>
      <InputAdd
        label="날짜"
        type="date"
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
