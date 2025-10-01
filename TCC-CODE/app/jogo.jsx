import { View, Text, StyleSheet } from "react-native";

export default function Jogo() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🎮 Tela do Jogo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#222" },
  text: { color: "#fff", fontSize: 28, fontWeight: "bold" },
});
