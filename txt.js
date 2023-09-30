import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { useState } from "react";

export default function App() {
  const objc = {
    username: "",
    password: "",
  };
  const [state, setState] = useState(objc);
  return (
    <View style={style.container}>
      <TextInput
        style={style.textInputArea}
        // secureTextEntry={true}
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="username"
        value={state.username}
        onChangeText={(username) => {
          setState({ username });
          console.log(state.username);
        }}
      />
      <TextInput
        style={style.textInputArea}
        secureTextEntry={true}
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="password"
        value={state.password}
        onChangeText={(password) => {
          setState({ password });
          console.log(state.password);
        }}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 120,
  },
  textInputArea: {
    height: 50,
    backgroundColor: "grey",
    paddingLeft: 10,
    marginBottom: 20,
  },
});