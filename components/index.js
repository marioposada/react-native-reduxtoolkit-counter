import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { colors } from "../constant/theme/colors";


export default function AppMain() {


  return (
    <View style={styles.container}>
      <Text style={styles.text}>{}</Text>
      <View style={styles.containerButtons}>
        <TouchableOpacity
          onPress={() => {}}
          style={styles.buttonAdd}
        >
          <Text style={styles.textButton}>Sumar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          style={styles.buttonRest}
        >
          <Text style={styles.textButton}>Restar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          style={styles.buttonReset}
        >
          <Text style={styles.textButton}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    borderColor: colors.black,

    backgroundColor: colors.darkGray,
  },
  text: {
    color: colors.white,
    backgroundColor: colors.black,
    fontSize: 100,
    fontWeight: "bold",
    padding: 20,

    marginVertical: 40,
  },
  containerButtons: {
    justifyContent: "space-between",
    width: "90%",
    borderColor: colors.black,
    margin: 20,
    backgroundColor: colors.tertiary,
    flexDirection: "row",
  },
  buttonAdd: {
    color: colors.primary,
    backgroundColor: colors.secondary,
    width: 100,
    height: 50,
    fontSize: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderWidth: 0.4,
  },
  buttonRest: {
    color: colors.primary,
    backgroundColor: colors.primary,
    width: 100,
    height: 50,
    fontSize: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderWidth: 0.4,
  },
  buttonReset: {
    color: colors.primary,
    backgroundColor: colors.tertiary,
    width: 100,
    height: 50,
    fontSize: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderWidth: 0.4,
  },
  textButton: {
    color: colors.black,
    fontSize: 20,
    fontWeight: "bold",
  },
});
