import { LOGIN_USER, LOGIN_ERROR } from "../types";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api";

export const loginUser = () => async (dispatch) => {
  try {
    const res = await axios.get("/user/profile", {
      withCredentials: true,
    });
    console.log(res.data);
    dispatch({
      type: LOGIN_USER,
      payload: res.data.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: LOGIN_ERROR,
      payload: "Something went wrong",
    });
  }
};
