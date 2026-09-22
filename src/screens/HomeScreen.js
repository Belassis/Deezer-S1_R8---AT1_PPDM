import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const options = [
  {
    title: 'Gêneros Musicais',
    description: 'Explore gêneros musicais e descubra novos artistas via Deezer',
    route: 'GeneroScreen'
  }
];

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.eyebrow}>DEEZER EXPLORER</Text>
          <Text style={styles.title}>Mundo da Música</Text>
          <Text style={styles.subtitle}>
            Explore os gêneros musicais e conheça os principais artistas diretamente da API do Deezer.
          </Text>
        </View>

        <View style={styles.list}>
          {options.map((option) => (
            <TouchableOpacity
              key={option.route}
              activeOpacity={0.8}
              style={styles.card}
              onPress={() => navigation.navigate(option.route)}
            >
              <View style={styles.cardText}>
                <Text style={styles.cardTitle}>{option.title}</Text>
                <Text style={styles.cardDescription}>{option.description}</Text>
              </View>
              <Text style={styles.arrow}>{">"}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F6F7F8",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 48,
  },
  heading: {
    marginBottom: 28,
  },
  eyebrow: {
    color: "#A238FF", // Cor com tema roxo/Deezer
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1.2,
  },
  title: {
    color: "#18211B",
    fontSize: 30,
    fontWeight: "700",
    marginTop: 8,
  },
  subtitle: {
    color: "#66706A",
    fontSize: 16,
    lineHeight: 24,
    marginTop: 10,
  },
  list: {
    gap: 12,
  },
  card: {
    minHeight: 92,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    paddingHorizontal: 18,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: "#E4E8E5",
  },
  cardText: {
    flex: 1,
  },
  cardTitle: {
    color: "#18211B",
    fontSize: 17,
    fontWeight: "700",
  },
  cardDescription: {
    color: "#66706A",
    fontSize: 14,
    lineHeight: 20,
    marginTop: 5,
  },
  arrow: {
    color: "#A238FF",
    fontSize: 32,
    lineHeight: 32,
    marginLeft: 12,
  },
});