import { View, Text, TouchableOpacity, Animated } from "react-native";
import { useEffect, useRef } from "react";
import { useRouter } from "expo-router";

export default function Entrada() {
  const router = useRouter();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Fade-in da tela de entrada
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#111", opacity: fadeAnim }}>
      <TouchableOpacity onPress={() => router.push("/jogo")}>
        <Text style={{ color: "#fff", fontSize: 28, fontWeight: "bold" }}>
          Clique para entrar!
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
}
