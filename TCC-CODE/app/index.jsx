import { Text, View } from "react-native";
import { useEffect } from "react";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace("/home");
    }, 6000);
    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
      }}
    >
      <Text
        style={{
          color: "#fff",
          fontSize: 24,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Desenvolvedores:{"\n"}Kaique Lacerda{"\n"}[Adicione outros nomes aqui]
      </Text>
    </View>
  );
}
