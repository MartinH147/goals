import { Text, View, StyleSheet } from "react-native";
import { Card } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient colors={["#f9b16e", "#f68080"]} style={styles.gradient}>
        <Card title="HELLO WORLD">
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component
            structure than actual design.
          </Text>
        </Card>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  gradient: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
});
