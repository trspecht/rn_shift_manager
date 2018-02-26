import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from "../actions/types";

const INITIAL_STATE = {
  email: "",
  password: "",
  user: "",
  error: "",
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      //make a new object - ... -, take all of the properties of my existing state object
      //and throw them into that object and then define the property email,
      //give it a value of action.payload and toss it on top of whatever property is in that state object
      //so if email already had an email property, it would be overwritten by this one we're trying to add on top here
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        ...INITIAL_STATE
      };
    case LOGIN_USER_FAIL:
      return { ...state, error: "Authentication failed", loading: false };
    case LOGIN_USER:
      return { ...state, loading: true, error: "" };
    default:
      return state;
  }
};
