import React, { Component } from "react";
import { Picker, Text } from "react-native";
import { Card, CardSection, Button } from "./common";
import { connect } from "react-redux"; //get access to an action creator
import { employeeCreate } from "../actions";
import EmployeeForm from "./EmployeeForm";
//and pass these down to the connect handler below ^

class EmployeeCreate extends Component {
  onButtonPress() {
    console.log(this.props);

    const { name, phone, shift } = this.props;
    //action creator from redux inside of EmployeeActions
    this.props.employeeCreate({ name, phone, shift: shift || "Sunday" });
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm; //we have this form here because of the combinedReducers key for employeeForm
  console.log(state);
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeCreate })(EmployeeCreate);
