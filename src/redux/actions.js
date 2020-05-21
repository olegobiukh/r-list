import axios from "axios";
import { GET_USERS } from "./constants";
const baseUsersUrl = "http://77.120.241.80:8911/api/users";
const baseUserUrl = "http://77.120.241.80:8911/api/user/";

const getList = (data) => {
  return {
    type: GET_USERS,
    payload: data,
  };
};

export const getUsers = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(baseUsersUrl);
      dispatch(getList(res.data));
    } catch (e) {
      console.log(e);
    }
  };
};

export const deleteUser = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(baseUserUrl + id);
      dispatch(getUsers());
    } catch (e) {
      console.log(e);
    }
  };
};

export const createUser = (data) => {
  return async (dispatch) => {
    try {
      await axios.post(baseUsersUrl, data);
      dispatch(getUsers());
    } catch (e) {
      console.log(e);
    }
  };
};

export const editUser = (id, data) => {
  return function (dispatch) {
    axios
      .put(baseUserUrl + id, data)
      .then((res) => {
        dispatch(getUsers());
      })
      .catch((e) => {
        console.log(e);
      });
  };
};
