import axiosInstance from "../api/axiosInstance";
import { end_point } from "../api/api_url";

// add user
export const addUser = async (data) => {
  let res = await axiosInstance.post(end_point.user, data);
  return res;
};

// fetch all user
export const fetchUser = async () => {
  let res = await axiosInstance.get(end_point.user);
  return res;
};

//fetch single user
export const fetchSingleUser = async (userId) => {
  let res = await axiosInstance.get(`${end_point.user}/${userId}`);
  return res;
};

//edit user
export const editUser = async (data) => {
  //   console.log("Received value", data);
  let res = await axiosInstance.put(`${end_point.user}/${data.id}`, data);
  return res;
};

//delete user
export const deleteUser = async (id) => {
  let res = await axiosInstance.delete(`${end_point.user}/${id}`);
  return res;
};
