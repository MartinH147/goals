import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import LinearGradient from "react-native-linear-gradient";

export default function Index() {
  return (
    // <linearGradient colors={["#4c669f", "#3b5998", "#192f6a"]}>
    //   <View style={styles.container}>
    //     <Text style={styles.text}>Home screen</Text>
    //     <Link href="/about" style={styles.button}>
    //       Go to About screen
    //     </Link>
    //   </View>
    // </linearGradient>
    <LinearGradient
      colors={["#4c669f", "#3b5998", "#192f6a"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <Text>Hello, Gradient!</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
