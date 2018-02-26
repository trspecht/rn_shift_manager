import React from "react";
import { Text, View, Modal } from "react-native";
import { CardSection, Button } from "../common";

const ConfirmModal = ({ children, visible, onAccept, onDecline }) => {
  const { cardSectionStyle, textStyle, containerStyle } = styles;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={() => {}}
    >
      <View style={containerStyle}>
        <CardSection style={cardSectionStyle}>
          <Text style={textStyle}>{children}</Text>
        </CardSection>

        <CardSection>
          <Button onPress={onAccept}>Yes</Button>
          <Button onPress={onDecline}>No</Button>
        </CardSection>
      </View>
    </Modal>
  );
};

const styles = {
  cardSectionStyle: {
    justifyContent: "center"
  },
  textStyle: {
    flex: 1, //make sure the text wraps
    fontSize: 18,
    textAlign: "center",
    lineHeight: 40 //how much space between each line of text
  },
  containerStyle: {
    backgroundColor: "rgba(0, 0, 0, 0.75)", //black 0, 0, 0 + opacity of 75%
    position: "relative",
    flex: 1,
    justifyContent: "center"
  }
};

export { ConfirmModal };
//don't forget to add this to the index.js inside of the common folder!
