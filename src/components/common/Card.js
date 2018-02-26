//Import libraries
import React from "react";
import { View } from "react-native";

//Make a component
const Card = props => {
  return (
    <View style={styles.containerStyle}>{props.children}</View>

    //props.children is saying: get whatever is in the AlbumDetail View tag
    //<Text>{props.album.title}</Text>
    // and stick it in here - Cards is being used in there
  );
};

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    borderBottomWidth: 0, //hide border in the bottom
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 }, //shadow of 2 in the bottom
    shadowOpacity: 0.1,
    shadowRadius: 2, //just like the border radius
    elevation: 1,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 10
  }
};

//Export component
// export default Card;
export { Card };
