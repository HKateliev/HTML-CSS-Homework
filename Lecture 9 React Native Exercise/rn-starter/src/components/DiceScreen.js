import React, { useState } from "react";
import { Text, View, StyleSheet, Pressable, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

//starting view of dices
const RollBtn = () => {
  const [diceValues, setDiceValues] = useState([0, 0, 0, 0]);
  const [total, setTotal] = useState(0);
  //genereate new numbers on dices
  const rollDices = () => {
    const newDiceValues = [0, 0, 0, 0].map(
      () => Math.floor(Math.random() * 6) + 1
    );
    setDiceValues(newDiceValues);
  };

  let newTotal = 0;
  diceValues.forEach((element) => {
    newTotal += element;
  });

  return (
    <View style={{ flexDirection: "column", alignItems: "center" }}>
      <View style={styles.totalContainer}>
        <Text style={styles.textTotal}>TOTAL: {newTotal}</Text>
      </View>
      <View style={styles.diceContainer}>
        {diceValues.map((diceValue, index) => (
          <View key={index} style={styles.viewStyle}>
            <Text style={styles.diceValue}>{diceValue}</Text>
          </View>
        ))}
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View>
          <TouchableOpacity style={styles.cornerBtn}>
            <Image
              source={{
                uri: "https://fontawesome.com/icons/gear?f=classic&s=solid",
              }}
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ marginLeft: 80, marginRight: 80 }}>
          <Pressable
            onPress={rollDices}
            style={({ pressed }) => [
              { opacity: pressed ? 0.2 : 1, backgroundColor: "#2277ee" },
              styles.buttonStyle,
            ]}
          >
            <Text style={styles.textStyle}>Roll Dice</Text>
          </Pressable>
        </View>
        <View>
          <TouchableOpacity style={styles.cornerBtn}>
            <Image
              source={{
                uri: "https://fontawesome.com/icons/bars?f=classic&s=solid",
              }}
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  viewStyle: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
    backgroundColor: "#556B2F",
    borderColor: "white",
    borderWidth: 2,
    width: 70,
    height: 70,
    margin: 10,
  },
  textStyle: {
    fontSize: 15,
    fontFamily: "Helvetica",
    color: "black",
    letterSpacing: 0.25,
  },
  diceValue: {
    fontSize: 20,
    fontWeight: "bold",
  },
  diceContainer: {
    flexDirection: "row",
    marginBottom: 80,
    marginTop: 20,
  },
  buttonStyle: {
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 7,
    backgroundColor: "#556B2F",
    borderColor: "white",
    borderWidth: 2,
    width: 100,
    height: 40,
  },
  textTotal: {
    color: "black",
    fontFamily: "Helvetica Neue",
    fontWeight: "bold",
    fontSize: 12,
    marginLeft: 8,
  },
  totalContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
    borderRadius: 50,
    paddingHorizontal: 5,
    elevation: 1,
    backgroundColor: "grey",
    borderColor: "white",
    borderWidth: 1,
    width: 80,
    height: 40,
  },
  cornerBtn: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: "#556B2F",
    borderColor: "white",
    borderWidth: 2,
  },
});

export default RollBtn;
