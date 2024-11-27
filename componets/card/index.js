import { TextLabel, TextValue } from "../texts";
import { View } from "react-native";

export const BaseCard = ({ children }) => {
  return (
    <View
      style={{
        backgroundColor: "#ffffff",
        borderColor: "#E7ECF3",
        borderWidth: 1,
        borderStyle: "solid",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: 150,
        borderRadius: 8,
      }}
    >
      {children}
    </View>
  );
};

export const CardValue = ({ valor, label }) => {
  return (
    <BaseCard>
      <TextValue valor={valor} />
      <TextLabel label={label} />
    </BaseCard>
  );
};

export const CardResultadoIMC = ({ imc }) => {
  const valorComDecimais = parseFloat(imc);

  return <CardValue valor={valorComDecimais.toFixed(2)} label="IMC" />;
};
