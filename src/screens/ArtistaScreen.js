import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, StyleSheet, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ArtistaScreen({ route }) {
    const { genreId, genreName } = route.params;
    const [artists, setArtistas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const buscarArtistas = async () => {
            try {
                const res = await fetch(`https://api.deezer.com/genre/${genreId}/artists`);
                const data = await res.json();

                setArtistas(data.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        buscarArtistas();
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

            <FlatList
                data={artists}
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
        fontSize: 22,
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
        borderColor: "#E4E8E5"
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
        color: "#18211B"
    }
});
