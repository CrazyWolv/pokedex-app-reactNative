import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Animated, Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import * as pokedex from './data/data.js';
import PokeCard from './components/PokeCards';
import charizard from './assets/img/6.png';
import pikachu from './assets/img/25.png'

const App = () => {

  // TODO : Fetch API with hooks to get datas
  // Hook function to get datas
  // const [pokemons, collectPokemons] = useState([]);
  //useEffect to receive datas
  // useEffect(() => {
  //   getAllPokemons();
  // }, [])

  
  return (
    <ScrollView>
      <View style={styles.container}>
       <PokeCard
            id='1'
            title='Dracaufeu'
            desc="Son souffle brûlant peut faire fondre la roche. Il est parfois la cause d'incendies de forêt."
            numero='6'
            img={charizard}
        />

        <PokeCard
            id='2'
            title='Pikachu'
            desc='Plus la puissance électrique de Pikachu est élevée, plus les poches de ses joues sont extensibles.'
            numero='25'
            img={pikachu}
        />
        {/* {
          // pokemons.map((pkmn) => {
          // <PokeCard
          //   id={pkmn.id}
          //   title={pkmn.name}
          //   desc={pkmn.description}
          //   numero={pkmn.numero}
          //   img={pkmn.img}
          // />})
        } */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  card: {
    width:'95%',
    margin:'10px',
    borderRadius: '3px',
    border:'1px solid #D3D3D3'
  },

  accordion: {
    flex:1,
    width:'100%',
    height:'20%',
    alignItems:'baseline',
    margin:'10px 0',
  },

  accordionIcon:{
    padding: '10px'
  },

  pkmnName: {
    padding: '10px 5px',
    fontSize:'1.5rem'
  },
});

export default App;