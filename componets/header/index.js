import { StyleSheet, View, Image, Text, SafeAreaView } from "react-native";
const Header = () => {
  return (
    <View style={styles.header}>
      <SafeAreaView />

      <View style={styles.headerContent}>
        <Image
          width={100}
          height={100}
          source={{
            uri: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=144,h=144,fit=crop/Yg2lPq3o5otVG07P/group-4-4-AR0JzwZBGXcevZoy.png",
          }}
        />

        <View>
          <Text style={styles.headerTitle}>Calculadora</Text>
          <Text style={styles.headerSubtitle}>De IMC</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#6E38B8",
    padding: 32,
  },
  headerContent: {
    flexDirection: "row",
    gap: 16,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  headerSubtitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#FFFFFF",
  },
});

export default Header;
