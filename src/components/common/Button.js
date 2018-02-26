//Import libraries
import React from "react";
import { Text, TouchableOpacity } from "react-native";

//Make component
const Button = ({ onPress, children }) => {
  //onPress = same prop that's being passed on AlbumDetail
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1, //I want this button to fill the whole width
    alignSelf: "stretch",
    backgroundColor: "#8DBF57",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#8DBF57",
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    alignSelf: "center", //center the text inside the button
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10
  }
};

//Export
// export default Button;
// export { Button : Button }; //export an object with the key of Button OR
export { Button };
