import { View, Text } from "react-native";

export default function Configuracoes() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚙️ Configurações</Text>
    </View>
  );
}

const styles = {
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#111" },
  title: { color: "#fff", fontSize: 28, fontWeight: "bold" },
};
