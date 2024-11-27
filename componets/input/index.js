import { StyleSheet, View, Text, TextInput } from "react-native";

const Input = ({ value, placeholder, onChangeText, label }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput
        style={styles.inputContent}
        value={value}
        keyboardType="numeric"
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    gap: 8,
  },
  inputLabel: {
    fontSize: 18,
  },
  inputContent: {
    beckgroundColor: "#FFFFFF",
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderRadius: 8,
    borderColor: "#E7ECF3",
    borderStyle: "solid",
    borderWidth: 1,
  },
});

export default Input;
