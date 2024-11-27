import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "../componets/header";
import Input from "../componets/input";
import Button from "../componets/button";

export default function Page() {
  const [peso, setPeso] = React.useState("");
  const [altura, setAltura] = React.useState("");

  return (
    <View style={styles.container}>
      <Header />
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.content}>
          <View stle={styles.inputs}>
            <Input
              label="Peso (Kg)"
              placeholder="informe seu peso"
              value={peso}
              onChangeText={(text) => {
                setPeso(text);
              }}
            />

            <Input
              label="Altura (Cm)"
              placeholder="informe sua altura"
              value={altura}
              onChangeText={(text) => {
                setAltura(text);
              }}
            />
          </View>

          <Button
            label="Calcular"
            href={{
              pathname: "/resultado",
              params: {
                peso,
                altura,
              },
            }}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F5",
  },

  content: {
    flex: 1,
    padding: 32,
    justifyContent: "space-between",
  },
  inputs: {
    gap: 160,
  },
  inputContainer: {
    gap: 8,
  },
});
