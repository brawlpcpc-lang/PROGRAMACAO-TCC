import { View, Text, TouchableOpacity, BackHandler } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎮 Menu Principal</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/jogo")}
      >
        <Text style={styles.text}>Início</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#2196F3" }]}
        onPress={() => router.push("/configuracoes")}
      >
        <Text style={styles.text}>Configurações</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#9C27B0" }]}
        onPress={() => router.push("/creditos")}
      >
        <Text style={styles.text}>Créditos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#F44336" }]}
        onPress={() => BackHandler.exitApp()}
      >
        <Text style={styles.text}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#111", padding: 20 },
  title: { color: "#fff", fontSize: 28, fontWeight: "bold", marginBottom: 40 },
  button: { backgroundColor: "#4CAF50", paddingVertical: 12, paddingHorizontal: 30, borderRadius: 12, marginBottom: 15, width: 220, alignItems: "center" },
  text: { color: "#fff", fontSize: 18 },
};
