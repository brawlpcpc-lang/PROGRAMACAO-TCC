import { Text, View, TouchableOpacity, Alert } from "react-native";

export default function Home() {
  const handlePress = (option) => {
    if (option === "sair") {
      Alert.alert("Sair", "Encerrando o app...");
      // Aqui você pode colocar lógica para fechar o app em Android
      // Exemplo: BackHandler.exitApp();
    } else {
      Alert.alert("Clicou em", option);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 20,
      }}
    >
      <Text style={{ color: "#222", fontSize: 28, fontWeight: "bold", marginBottom: 40 }}>
        Bem-vindo ao App!
      </Text>

      {/* Botão Início */}
      <TouchableOpacity
        style={{
          backgroundColor: "#4CAF50",
          paddingVertical: 12,
          paddingHorizontal: 30,
          borderRadius: 12,
          marginBottom: 15,
        }}
        onPress={() => handlePress("início")}
      >
        <Text style={{ color: "#fff", fontSize: 18 }}>Início</Text>
      </TouchableOpacity>

      {/* Botão Configurações */}
      <TouchableOpacity
        style={{
          backgroundColor: "#2196F3",
          paddingVertical: 12,
          paddingHorizontal: 30,
          borderRadius: 12,
          marginBottom: 15,
        }}
        onPress={() => handlePress("configurações")}
      >
        <Text style={{ color: "#fff", fontSize: 18 }}>Configurações</Text>
      </TouchableOpacity>

      {/* Botão Créditos */}
      <TouchableOpacity
        style={{
          backgroundColor: "#9C27B0",
          paddingVertical: 12,
          paddingHorizontal: 30,
          borderRadius: 12,
          marginBottom: 15,
        }}
        onPress={() => handlePress("créditos")}
      >
        <Text style={{ color: "#fff", fontSize: 18 }}>Créditos</Text>
      </TouchableOpacity>

      {/* Botão Sair */}
      <TouchableOpacity
        style={{
          backgroundColor: "#F44336",
          paddingVertical: 12,
          paddingHorizontal: 30,
          borderRadius: 12,
        }}
        onPress={() => handlePress("sair")}
      >
        <Text style={{ color: "#fff", fontSize: 18 }}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
