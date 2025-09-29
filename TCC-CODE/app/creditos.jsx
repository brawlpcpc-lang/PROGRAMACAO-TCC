import { View, Text } from "react-native";

export default function Creditos() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📜 Créditos do App</Text>
      <Text style={styles.text}>Desenvolvedores: Alexandre Boeing & equipe</Text>
    </View>
  );
}

const styles = {
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#111", padding: 20 },
  title: { color: "#fff", fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  text: { color: "#ccc", fontSize: 18, textAlign: "center" },
};
