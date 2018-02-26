import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS
} from "./types";
import firebase from "firebase";
import { Actions } from "react-native-router-flux";

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

//hook up this action to EmployeeCreate.js -> import it there
export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();
  //get access to our database -> firebase.database
  //make a reference to users/userid/employees -> not an url, it's a path to our json data store
  //json data store represented below
  // THIS below is what we'd do, but since we're getting the userId from the
  //curentUser variable, we're gonna switch this to string interpolation, as in
  //the next line
  // firebase.database.ref("/users/userId/employees");

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE });
        Actions.main({ type: "reset" });
      });
  };
};

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .on("value", snapshot => {
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const employeeSave = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();

  //dispatch so we can reset all the form attributes
  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
        Actions.main({ type: "reset" });
      });
  };
};

export const employeeDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        Actions.main({ type: "reset" });
      });
  };
};

// JSON STRUCTURE
//
//   "users":
//     "userId":
//       "employees":
//         "employee1:
//           "name": "Jane",
//           "phone": "555-5555",
//           "shift": "Monday"
//         ,
//         "employee2:
//           "name": "John",
//           "phone": "666-6666",
//           "shift": "Tuesday"
//
//
//       "userId2":
//         "employees":
//           ...
//
//
//
//
//
