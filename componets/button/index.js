import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = ({ href, label }) => {
  return (
    <Link href={href} asChild>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{label}</Text>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#6E38B8",
    height: 56,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default Button;
