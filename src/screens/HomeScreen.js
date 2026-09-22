import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        
        {/*Título*/}
        <Text style={styles.eyebrow}>DEEZER EXPLORER</Text>

        {/*Card Principal*/}
        <View style={styles.mainCard}>
          <Text style={styles.title}>Mundo da Música</Text>
          <Text style={styles.subtitle}>
            Explore os gêneros musicais e conheça os principais artistas com a Deezer.
          </Text>

          {/*Botão Roxo*/}
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.purpleButton}
            onPress={() => navigation.navigate("GeneroScreen")}
          >
            <View style={styles.buttonContent}>
              <Text style={styles.buttonTitle}>Explorar Gêneros</Text>
              <Text style={styles.buttonDescription}>
                Descubra novos gêneros e artistas na plataforma
              </Text>
            </View>
            <View style={styles.arrowBadge}>
              <Text style={styles.arrowText}>❯</Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#121212",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  eyebrow: {
    color: "#A238FF",
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 2,
    marginBottom: 16,
    textAlign: "center",
  },
  mainCard: {
    width: "100%",
    backgroundColor: "#1E1E1E",
    borderRadius: 20,
    padding: 24,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#2A2A2A",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    color: "#A0A0A0",
    fontSize: 14,
    lineHeight: 20,
    marginTop: 8,
    marginBottom: 24,
    textAlign: "center",
  },
  purpleButton: {
    width: "100%",
    backgroundColor: "#A238FF",
    borderRadius: 14,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonContent: {
    flex: 1,
    paddingRight: 10,
  },
  buttonTitle: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "bold",
  },
  buttonDescription: {
    color: "#E2B8FF",
    fontSize: 12,
    marginTop: 2,
  },
  arrowBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    justifyContent: "center",
    alignItems: "center",
  },
  arrowText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },
});