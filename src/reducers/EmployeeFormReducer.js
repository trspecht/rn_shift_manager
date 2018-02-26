import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_SAVE_SUCCESS
} from "../actions/types";

const INITIAL_STATE = {
  name: "",
  phone: "",
  shift: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE: //has two keys in EmployeeActions.js -> prop and value
      //action.payload === prop: 'name', value: 'jane'

      //these brackets here are not an array, they're called KEY INTERPOLATION
      //so the key that we're adding to this object will be determined in runtime
      return { ...state, [action.payload.prop]: action.payload.value };
    case EMPLOYEE_CREATE:
      //this employee has successfully been created, so clear the form!
      return INITIAL_STATE;
    case EMPLOYEE_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
