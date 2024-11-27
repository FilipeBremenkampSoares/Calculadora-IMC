import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Header from "../componets/header";
import Button from "../componets/button";
import { CardValue, CardResultadoIMC } from "../componets/card";

const ValorDoImc = ({ valor = 0 }) => {
  const valorComDecimais = parseFloat(valor);

  return (
    <View
      style={{
        backgroundColor: "#ffffff",
        borderColor: "#E7ECF3",
        borderWidth: 1,
        borderStyle: "solid",
        justifyContent: "center",
        alignItems: "center",
        height: 150,
      }}
    >
      <Text style={{ fontSize: 40, fontWeight: "bold" }}>
        {valorComDecimais.toFixed(2)}
      </Text>
      <Text style={{ fontSize: 18 }}></Text>
    </View>
  );
};

const ResultadoDoIMC = ({ titulo, subtitulo, corDeFundo }) => {
  return (
    <View style={{ padding: 16, backgroundColor: corDeFundo, borderRadius: 8 }}>
      <Text style={{ color: "#ffffff", fontSize: 16, fontWeight: "bold" }}>
        {titulo}
      </Text>
      <Text style={{ color: "#ffffff", fontSize: 14 }}>{subtitulo}</Text>
    </View>
  );
};

export default function Page() {
  const { peso, altura } = useLocalSearchParams();

  const alturaEmMetros = altura / 100;
  const imc = peso / (alturaEmMetros ** 2);

  const tabelaDeImc = [
    {
      max: Infinity,
      classification: "Obesidade grau III",
      color: "#FF7262",
      subtitle: "Você precisa iniciar um acompanhamento com nutricionista",
    },
    {
      max: 39.9,
      classification: "Obesidade grau II",
      color: "#FF7262",
      subtitle: "Você precisa iniciar um acompanhamento com nutricionista",
    },
    {
      max: 34.9,
      classification: "Obesidade grau I",
      color: "#FF7262",
      subtitle: "Você precisa iniciar um acompanhamento com nutricionista",
    },
    {
      max: 29.9,
      classification: "Sobrepeso",
      color: "#FDB32A",
      subtitle: "Importante rever hábitos e buscar ajuda",
    },
    {
      max: 24.9,
      classification: "Peso Normal",
      color: "#75BF72",
      subtitle: "Que bom que você está com o peso normal",
    },
    {
      max: 18.5,
      classification: "Abaixo do normal",
      color: "#FDB32A",
      subtitle: "Talvez seja interessante procurar um médico",
    },
  ];

  const resultadoDoImc = tabelaDeImc.reduce((valorAnterior, valorAtual) => {
    if (imc <= valorAtual.max) {
      // meu imc é menor do que o maximo
      // então retornar a classificação para a variável valorAnterior
      return valorAtual;
    }

    return valorAnterior; // mantenho a classificação anterior
  }, "-");

  return (
    <View style={styles.container}>
      <Header />

      <View style={{ flex: 1, padding: 32, justifyContent: "space-between", gap: 8 }}>

        <View style={{ flexDirection: "row", gap: 8 }}>
          <CardValue valor={peso} label="Peso (kg)" />
          <CardValue valor={altura} label="Altura (cm)" />
        </View>

        <CardResultadoIMC imc={imc} />

        <ResultadoDoIMC
          titulo={resultadoDoImc.classification}
          subtitulo={resultadoDoImc.subtitle}
          corDeFundo={resultadoDoImc.color}
        />
        <Button
          label="Voltar"
          href={{
            pathname: "/",
          }}
        />
      </View>
      <StatusBar style="light" />
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
});
