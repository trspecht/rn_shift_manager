import React, { Component } from "react";
import { ListView } from "react-native";
import { connect } from "react-redux";
import { employeesFetch } from "../actions";
import EmployeeListItem from "../components/EmployeeListItem";
import _ from "lodash";

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
    this.createDateSource(this.props);
  }

  //nice method to reacting to any change
  componentWillReceiveProps(nextProps) {
    //nextProps are the next set of props that this component will be rendered with
    //this.props is still the OLD set of props
    this.createDateSource(nextProps);
  }

  createDateSource({ employees }) {
    const ds = new ListView.DataSource({
      //order in which the records will be added in the list
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employee) {
    return <EmployeeListItem employee={employee} />;
  }

  render() {
    console.log(this.props);
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  //val here is the employee model
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
    //returns something like `shift: 'monday', name: 'tai', phone: '3333', id: 'lj2i3jl3kj43l4'`
    //and assigns it to employees
  });
  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);

//list needs a data source object

//import ListView
//create a datasource -> createDataSource helper method
//we get an object from Firebase, so we need to turn it into an array
//so create a mapStateToProps and install in the terminal a helper library
//npm install --save lodash -> to convert to array and then call
//all that stuff inside of mapStateToProps
