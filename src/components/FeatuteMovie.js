import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {
    Text,
    View,
    Image,
    StyleSheet,
    ImageBackground
} from 'react-native';

const styles = StyleSheet.create({
    featureText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 15,
        marginRight: 15,
        color: '#fff',
        fontFamily: 'Roboto'
    },
    featureDescription: {
        marginTop: 15,
        fontSize: 14,
        color: '#999',
        marginRight: 30,
        height: '25%'
    },
    featureButton: {
        fontSize: 20,
        fontWeight: 'bold',
        borderRadius: 5,
        marginRight: 10,
        paddingTop: 12,
        paddingRight: 25,
        paddingLeft: 25,
    },
    featureWatchbutton: {
        backgroundColor: '#fff',
        color: '#000'
    },
    featureMylistbutton: {
        backgroundColor: '#333',
        color: '#fff'
    },
    featureGenres: {
        marginTop: 15,
        fontSize: 15,
        color: '#999'
    }
});

function FeaturedMovie({ item }) {

    let firstDate = new Date(item.first_air_date);

    let genres = [];
    for (let i in item.genres) {
        genres.push(item.genres[i].name);
    }

    let description = item.overview;

    if (description.length > 200) {
        description = description.substring(0, 200) + " ... ";
    }

    return (
        <ImageBackground
            source={{
                uri: `https://image.tmdb.org/t/p/original${item.backdrop_path}`,
            }}
            resizeMode="cover"
            style={{
                width: '100%', height: 400
            }}>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0.5, y: 0 }} colors={['rgba(17, 17, 17,1)', 'rgba(17, 17, 17,0.5)']}
                style={{
                    width: '100%',
                    height: '100%',
                    paddingTop: 20,
                }}>
                <Text style={{
                    fontSize: 40,
                    fontWeight: 'bold',
                    color: '#fff',
                    fontFamily: 'Roboto Bold',
                }}>{item.original_name}</Text>
                <View style={{
                    flex: 1,
                    flexDirection: 'row'
                }}>
                    <Text style={[styles.featureText, { color: '#46d369' }]}>{item.vote_average} pontos</Text>
                    <Text style={styles.featureText}>{firstDate.getFullYear()}</Text>
                    <Text style={styles.featureText}>{item.number_of_seasons} temporada{item.number_of_seasons !== 1 && 's'}</Text>
                </View>
                <Text style={styles.featureDescription}>{description}</Text>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    marginTop: 15,
                    marginBottom: 50,
                    maxHeight: 50
                }}>
                    <Text style={[styles.featureButton, styles.featureWatchbutton]}>► Assistir</Text>
                    <Text style={[styles.featureButton, styles.featureMylistbutton]}>+ Minha Lista</Text>
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'row'
                }}>
                    <Text style={styles.featureGenres}>Generos:</Text>
                    <Text style={styles.featureGenres}> {genres.join(', ')}</Text>
                </View>
            </LinearGradient>
        </ImageBackground >

    )

}

export default FeaturedMovie