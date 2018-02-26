import React from "react";
import { TextInput, View, Text } from "react-native";
import { StyledInput } from "./StyledInput";

const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry
}) => {
  //prop names are all free to name
  const { labelStyle, textInputStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        style={textInputStyle}
      />
    </View>
  );
};

const styles = {
  labelStyle: {
    paddingLeft: 10,
    flex: 1.5,
    color: "#8D919B",
    fontWeight: "bold"
  },
  textInputStyle: {
    color: "#000",
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 18,
    lineHeight: 23, //how much space is in between each line of text
    flex: 4.5
    // height: 20,
    // width: 100
  },
  containerStyle: {
    height: 48,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 16,
    borderColor: "#8D919B"
  }
};

export { Input };

//wrap a textInput e.g. "Name: ________"
