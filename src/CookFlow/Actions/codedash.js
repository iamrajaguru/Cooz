import axios from "axios";

export const updateUserInput = (key, value) => ({
  type: "USER_INPUT",
  key,
  value
});

export const submitHolding = (e) => async dispatch => {
   
//   e.preventDefault();
  try {
    let res = await axios.get(`http://localhost:4000/post/${e.userinput}`);
    dispatch(updateUserInput("obj", res.data));
    // console.log(userinput);
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};
