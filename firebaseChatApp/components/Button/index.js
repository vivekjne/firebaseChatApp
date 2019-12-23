import React from "react";
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Text,
  StyleSheet,
  Platform,
  View
} from "react-native";
import { colors } from "../../themes";

const Wrapper = props => {
  let buttonStyle = styles.normal;
  let textStyle = styles.textStyle;
  if (props.full) {
    buttonStyle = styles.full;
  }

  if (props.block) {
    buttonStyle = styles.block;
  }

  if (props.rounded) {
    buttonStyle = styles.rounded;
  }

  if (props.transparent) {
    buttonStyle = styles.transparent;
    textStyle = styles.transparentTextStyle;
  }

  if (props.backgroundColor) {
    buttonStyle = { ...buttonStyle, backgroundColor: props.backgroundColor };
  }
  return Platform.select({
    ios: (
      <TouchableOpacity onPress={props.onPress}>
        <View style={[buttonStyle, props.style]}>
          {props.custom ? (
            props.children
          ) : (
            <Text style={[textStyle, props.textStyle]}>{props.title}</Text>
          )}
        </View>
      </TouchableOpacity>
    ),
    android: (
      <TouchableNativeFeedback onPress={props.onPress}>
        <View style={[buttonStyle, props.style]}>
          {props.custom ? (
            props.children
          ) : (
            <Text style={[textStyle, props.textStyle]}>{props.title}</Text>
          )}
        </View>
      </TouchableNativeFeedback>
    )
  });
};

const Button = props => {
  return <Wrapper {...props} />;
};

const styles = StyleSheet.create({
  normal: {
    height: 48,
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.buttonColor,
    width: 100,
    elevation: 5
  },
  transparent: {
    paddingHorizontal: 8,
    paddingVertical: 4
  },
  full: {
    width: "100%",
    height: 48,
    backgroundColor: colors.buttonColor,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2
  },
  block: {
    width: "100%",
    height: 48,
    backgroundColor: colors.buttonColor,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    elevation: 5
  },
  rounded: {
    width: "100%",
    height: 48,
    backgroundColor: colors.buttonColor,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    elevation: 5
  },
  textStyle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700"
  },
  transparentTextStyle: {
    color: "#000",
    fontSize: 16,
    fontWeight: "400"
  }
});

export default Button;
