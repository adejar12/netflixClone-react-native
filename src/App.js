/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import Tmdb from './Tmdb';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeatuteMovie';
import HeaderNetflix from './components/Header';
import LottieView from 'lottie-react-native';

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    zIndex: 99,
    backgroundColor: '#000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

function App() {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    async function loadAll() {
      //pegando a lista Total
      let list = await Tmdb.getHomeList();
      setMovieList(list)

      let originais = list.filter(i => i.slug === 'originals');
      let ramdomChosen = Math.floor(Math.random() * (originais[0].items.results.length - 1));
      let chosen = originais[0].items.results[ramdomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    }

    loadAll();
  }, [])

  if (movieList.length > 0) {
    return (
      <>
        <HeaderNetflix />
        <ScrollView style={{
          backgroundColor: '#111',
        }}  >

          <View >
            {featuredData &&
              <FeaturedMovie item={featuredData} />
            }
            {movieList.map((item, key) => (
              <MovieRow key={key} title={item.title} items={item.items} />

            ))}
          </View>
          <View style={{
            flex: 1,
            alignItems: 'center',
            marginTop: 20,
            marginBottom: 20,
          }}>
            <Text style={{
              color: '#fff',
              fontFamily: 'Roboto Bold',
            }}>Direitos de imagem para a Netflix</Text>
          </View>
        </ScrollView>
      </>
    );
  } else {
    return (
      <>
        <View
          style={{
            backgroundColor: 'black',
            height: '100%',
            width: '100%',
          }}>
          <LottieView
            source={require('../assets/gif/Netflix_LoadTime.json')}
            size={50}
            autoPlay
            loop
          />
        </View>

      </>
    );
  }

};


export default App;
