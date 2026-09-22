import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, StyleSheet, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { buscarArtistasPorGenero } from "../services/artista";

export default function ArtistaScreen({ route }) {
    const { genreId, genreName } = route.params;
    const [artists, setArtistas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const buscarArtistas = async () => {
            try {
                setLoading(true);
                setArtistas([]); // Limpa a lista anterior antes de buscar novos dados

                console.log(`Buscando artistas para o gênero: ${genreName} (ID: ${genreId})`);

                const data = await buscarArtistasPorGenero(genreId);

                // Verifica se a API retornou um array de dados válido
                if (data && data.data && data.data.length > 0) {
                    setArtistas(data.data);
                } else {
                    setArtistas([]);
                }
            } catch (error) {
                console.error("Erro ao buscar artistas da API:", error);
                setArtistas([]);
            } finally {
                setLoading(false);
            }
        };

        if (genreId) {
            buscarArtistas();
        }
    }, [genreId]);

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" color="#A238FF" />
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerTitle}>
                Artistas de {genreName}
            </Text>

            {artists.length === 0 ? (
                <View style={styles.center}>
                    <Text style={styles.emptyText}>Nenhum artista encontrado para este gênero.</Text>
                </View>
            ) : (
                <FlatList
                    data={artists}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <Image
                                source={{ uri: item.picture_medium }}
                                style={styles.avatar}
                            />

                            <View style={styles.info}>
                                <Text style={styles.name}>{item.name}</Text>
                            </View>
                        </View>
                    )}
                />
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000000",
        padding: 16
    },

    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    headerTitle: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 16,
        color: "#A238FF"
    },

    emptyText: {
        fontSize: 16,
        color: "#66706A",
        textAlign: "center"
    },

    card: {
        flexDirection: "row",
        backgroundColor: "#000000",
        borderRadius: 12,
        padding: 12,
        marginBottom: 12,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#A238FF"
    },

    avatar: {
        width: 70,
        height: 70,
        borderRadius: 35
    },

    info: {
        marginLeft: 14
    },

    name: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#ffffff"
    }
});