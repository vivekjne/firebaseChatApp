import React from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";
import { colors } from "../../themes";

const Input = props => {
  const { inputContainer, labelStyle, inputStyle, label, ...rest } = props;

  return (
    <>
      {label && <Text style={[styles.labelStyle, labelStyle]}>{label}</Text>}
      <View style={[styles.inputContainer, inputContainer]}>
        <TextInput style={[styles.inputStyle, inputStyle]} {...rest} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: 4,
    marginBottom: 16
  },
  labelStyle: {
    color: colors.black,
    fontWeight: "500",
    fontSize: 18,
    marginBottom: 8
  },
  inputStyle: {
    width: "100%",
    height: 48,
    paddingHorizontal: 8,
    justifyContent: "center"
  }
});

export default Input;
