import axios from "axios";

const JSON_API_HOST = "http://localhost:5000";

export const getExpenses = async () => {
  try {
    const response = await axios.get(`${JSON_API_HOST}/expenses`);
    return response.data;
  } catch {
    alert("오류");
    4;
  }
};
export const getExpense = async (id) => {
  try {
    const response = await axios.get(`${JSON_API_HOST}/expenses/${id}`);
    return response.data;
  } catch {
    alert("오류1");
  }
};

export const addExpense = async (newExpense) => {
  try {
    const response = await axios.post(`${JSON_API_HOST}/expenses`, newExpense);
    return response.data;
  } catch (error) {
    alert("오류 발생");
  }
};
export const putExpense = async (update) => {
  const { id, ...rest } = update;
  try {
    const response = await axios.put(`${JSON_API_HOST}/expenses/${id}`, rest);
    return response.data;
  } catch (error) {
    console.error("Expense update failed:", error);
    throw error;
  }
};
export const deleteExpense = async (id) => {
  try {
    const response = await axios.delete(`${JSON_API_HOST}/expenses/${id}`);
    return response.data;
  } catch (error) {
    alert("오류 발생3");
  }
};
