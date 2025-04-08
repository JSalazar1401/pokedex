import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from "@expo/vector-icons/Ionicons"

const typeColors = {
    Fire: 'red',
    Flying: 'gray',
    Electric: 'gold',
    Water: 'dodgerblue',
    Grass: 'green',
    Ice: 'skyblue',
    Fighting: 'orange',
    Poison: 'purple',
    Ground: 'sienna',
    Rock: 'darkgray',
    Bug: 'limegreen',
    Ghost: 'indigo',
    Steel: 'lightgray',
    Fairy: 'pink',
    Dragon: 'darkblue',
    Psychic: 'hotpink',
    Normal: 'lightgray',
};
export default function Unique({ route }) {
    const { pokemon } = route.params;
    const bgColor = typeColors[pokemon.Type1] || 'lightgray';
    return (
        <SafeAreaView style={[styles.background, { backgroundColor: bgColor }]}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.head}>
                    <Text style={styles.arrow}><Ionicons name="arrow-back-circle-sharp" size={30} /></Text>
                    <View style={styles.nameContainer}>
                        <Text style={[styles.name, { color: bgColor }]}>{pokemon.Name}</Text>
                        {
                            pokemon.Form != " " && (
                                <Text style={[styles.name, { color: bgColor }]}> - {pokemon.Form}</Text>
                            )
                        }
                    </View>
                    <Text style={styles.idPokemon}>#{pokemon.ID}</Text>
                </View>

                <View style={styles.main}>
                    <Text style={styles.arrowSmall}><Ionicons name='arrow-back-outline' size={30} /></Text>
                    <View style={styles.imgPokemon}>
                        <Image
                            source={{
                                uri: pokemon.img,
                            }}
                            style={styles.image}
                        />
                    </View>
                    <Text style={styles.arrowSmall}><Ionicons name='arrow-forward' size={30} /></Text>
                </View>

                <View style={styles.footer}>
                    <View style={styles.tags}>
                        <Text style={[styles.tag, { backgroundColor: typeColors[pokemon.Type1] || 'gray' }]}>{pokemon.Type1}</Text>
                        {
                            pokemon.Type2 != " " && (
                                <Text style={[styles.tag, { backgroundColor: typeColors[pokemon.Type2] || 'gray' }]}>{pokemon.Type2}</Text>
                            )
                        }
                    </View>

                    <View style={styles.stats}>
                        <Text style={styles.titleStats}>Estadísticas base</Text>
                        {Object.entries(pokemon.stats).map(([key, value]) => (
                            <View style={styles.row} key={key}>
                                <Text style={styles.stat}>{key}</Text>
                                <View style={styles.progressBar}>
                                    <View style={[styles.progressFill, { width: `${(value / 200) * 100}%` }]} />
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        alignItems: 'center',
    },
    arrow: {
        fontWeight: 'bold',
        color: 'white',
    },
    nameContainer: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    idPokemon: {
        fontSize:20,
        color: 'white',
        fontWeight: 'bold',
    },
    main: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 20,
    },
    arrowSmall: {
        color: 'white',
        marginHorizontal: 10,
    },
    imgPokemon: {
        borderRadius: 100,
        backgroundColor: 'white',
        padding: 5,
        borderWidth: 10,
        borderColor: 'white',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 100,
        backgroundColor: 'black',
        padding: 10,
    },
    footer: {
        padding: 30,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: 'center',
        height: "100%"
    },
    tags: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%',
        marginBottom: 20,
    },
    tag: {
        borderRadius: 10,
        padding: 10,
        color: 'white',
        fontSize: 13,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    stats: {
        width: '100%',
    },
    titleStats: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'blueviolet',
        textAlign: 'center',
        marginBottom: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 6,
        paddingHorizontal: 10,
    },
    stat: {
        width: 60,
        fontSize: 15,
        fontWeight: 'bold',
    },
    progressBar: {
        flex: 1,
        height: 10,
        backgroundColor: '#eee',
        borderRadius: 5,
        overflow: 'hidden',
    },
    progressFill: {
        height: '100%',
        backgroundColor: 'blueviolet',
    },
});
