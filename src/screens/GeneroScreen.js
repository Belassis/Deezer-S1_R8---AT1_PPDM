import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function GeneroScreen({ navigation }) {
    const [generos, setGeneros] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Requisição HTTP para a API pública do Deezer
        const buscarGeneros = async () => {
            try {
                const res = await fetch("https://api.deezer.com/genre");
                const data = await res.json();

                const filtered = data.data.filter((item) => item.id !== 0);
                setGeneros(filtered);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        buscarGeneros();
    }, []);

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" color="#A238FF" />
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerTitle}>Gêneros Musicais</Text>
            <FlatList
                data={generos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() =>
                            navigation.navigate("ArtistaScreen", {
                                genreId: item.id,
                                genreName: item.name
                            })
                        }
                    >
                        {/* Informação 1: Imagem/Capa do gênero */}
                        <Image
                            source={{ uri: item.picture_medium }}
                            style={styles.image}
                        />

                        <View style={styles.info}>
                            {/* Informação 2: Nome do gênero */}
                            <Text style={styles.name}>{item.name}</Text>

                            {/* Informação 3: ID do registro na API */}
                            <Text style={styles.genreId}>
                                ID do Gênero: {item.id}
                            </Text>
                        </View>

                        <Text style={styles.arrow}>{">"}</Text>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F6F7F8",
        padding: 16
    },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
        color: "#18211B"
    },
    card: {
        flexDirection: "row",
        backgroundColor: "#FFF",
        borderRadius: 12,
        padding: 12,
        marginBottom: 12,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#E4E8E5",
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 8
    },
    info: {
        flex: 1,
        marginLeft: 14
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#18211B"
    },
    genreId: {
        fontSize: 13,
        color: "#66706A",
        marginTop: 4
    },
    arrow: {
        fontSize: 24,
        color: "#A238FF",
        fontWeight: "bold"
    },
});
