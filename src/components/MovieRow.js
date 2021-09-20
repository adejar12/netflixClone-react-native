import React, { useState } from 'react'

import {
    Text,
    View,
    Image,
    StyleSheet,
    FlatList
} from 'react-native';

const styles = StyleSheet.create({
    movieRowItem: {
        width: 150,
    },
    image: {
        width: 175,
        height: 300,
        marginRight: 30,
        marginTop: 10,
        marginBottom: 10
    },
    movieRow: {
        marginTop: 20
    }
});

function MovieRow({ title, items }) {
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        return (
            <Image
                style={styles.image}
                source={{
                    uri: `http://image.tmdb.org/t/p/w300${item.poster_path}`,
                }} />
        );
    };

    return (
        <View style={styles.movieRow}>
            <Text style={{
                color: '#fff',
                fontFamily: 'Roboto Bold',
                margin: 0,
                fontSize: 18
            }}>{title}</Text>
            <View >
                <View>
                    <FlatList
                        horizontal={true}
                        data={items.results}
                        renderItem={renderItem}
                    />
                </View>
            </View>

        </View>
    )

}

export default MovieRow