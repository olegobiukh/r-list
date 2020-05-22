import { GET_USERS, CREATE_USER, REQUEST_USERS, UPDATE_USER, DELETE_USER } from "./constants";

export const getUsers = (data) => {
  return {
    type: GET_USERS,
    payload: data,
  };
};

export const requestUsers = () => {
  console.log(1);
  
  return {
    type: REQUEST_USERS,
  };
};

export const deleteUser = (id) => {
  return {
    type: DELETE_USER,
    id,
  };
};

export const updateUser = (id, data) => {
  return {
    type: UPDATE_USER,
    id,
    data,
  };
};

export const createUser = (data) => {
  return {
    type: CREATE_USER,
    data,
  };
};
