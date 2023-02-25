const initialState = {
  Reg_fullname: "",
  Reg_username: "",
  Reg_email: "",
  Reg_password: "",
  Reg_confirmPassword: "",
  Account_fullname: "",
  Account_username: "",
  Account_email: "",
  Account_id: "",
  alert: "",
};

const reducer = (state = initialState, action) => {
  if (action.type === "REG_FORM") {
    return {
      ...state,
      Reg_fullname: action.payload.fullname,
      Reg_username: action.payload.username,
      Reg_email: action.payload.email,
      Reg_password: action.payload.password,
      Reg_confirmPassword: action.payload.confirmPassword,
    };
  }
  if(action.type === "ACCOUNT_INFO"){
    return {
      ...state,
      Account_fullname : action.payload.fullname,
      Account_id : action.payload._id,
      Account_username : action.payload.username,
      Account_email : action.payload.email,
    }
  }
  return state;
};

export default reducer;