//Import libraries
import React from "react";
import { View } from "react-native";

//Make a component
const CardSection = props => {
  return (
    <View style={[styles.containerStyle, props.style]}>{props.children}</View>
  );
};

const styles = {
  containerStyle: {
    padding: 5,
    backgroundColor: "#fff",
    borderBottomWidth: 0,
    justifyContent: "flex-start",
    flexDirection: "row",
    borderColor: "#ddd",
    position: "relative"
  }
};
//Export
// export default CardSection;
export { CardSection };
