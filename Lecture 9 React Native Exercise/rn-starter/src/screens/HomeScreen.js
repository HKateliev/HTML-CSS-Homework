import React from "react";
import { StyleSheet, View } from "react-native";
import RollBtn from "../components/DiceScreen";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <RollBtn />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2F4F4F",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: "#556B2F",
    marginBottom: 10,
    borderColor: "white",
    borderWidth: 2,
  },
});

export default HomeScreen;
