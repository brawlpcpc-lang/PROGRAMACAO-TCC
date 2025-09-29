import { View, Text } from "react-native";

export default function Jogo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎮 Tela do Jogo</Text>
    </View>
  );
}

const styles = {
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#111" },
  title: { color: "#fff", fontSize: 28, fontWeight: "bold" },
};
