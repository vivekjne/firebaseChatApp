import React from "react";

import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import Button from "../../components/Button";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Input from "../../components/Input";
export default () => {
  return (
    <SafeAreaView>
      <KeyboardAwareScrollView
        contentContainerStyle={{ padding: 16, paddingTop: "40%" }}
      >
        <Input label="Email" placeholder="Enter Email..." />
        <Input label="Password" placeholder="Enter Password..." />

        <Button style={{ marginTop: 20 }} rounded title="Sign In" />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
