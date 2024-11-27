import { Text } from "react-native";
export const TextValue = ({ Valor }) => {
  return <Text style={{ fontSize: 40, fontWeight: "bold" }}>{Valor}</Text>;
};

export const TextLabel = ({ label }) => {
  return <Text style={{ fontSize: 18 }}>{label}</Text>;
};
