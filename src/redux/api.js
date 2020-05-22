import axios from "axios";

const baseUsersUrl =
  "https://cors-anywhere.herokuapp.com/77.120.241.80:8911/api/users";
const baseUserUrl =
  "https://cors-anywhere.herokuapp.com/77.120.241.80:8911/api/user/";

export const getData = async (url) => {
  try {
    const res = await axios.get(baseUsersUrl);
    return res;
  } catch (e) {
    console.log(e);
  }
};

export const postData = async (data) => {
  try {
    await axios.post(baseUsersUrl, data);
  } catch (e) {
    console.log(e);
  }
};

export const putData = async (id, data) => {
  try {
    await axios.put(baseUserUrl + id, data);
  } catch (e) {
    console.log(e);
  }
};

export const deleteData = async (id) => {
  try {
    await axios.delete(baseUserUrl + id);
  } catch (e) {
    console.log(e);
  }
};
