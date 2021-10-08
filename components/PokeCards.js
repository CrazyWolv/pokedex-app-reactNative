import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Animated, Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import Description from './PokeDescription';

const PokeCard = ({id, title, desc, img, numero}) => {
  // Hook State for device orientation
  const [orientation, setOrientation] = useState('');

  // If the screen is in portrait mode, return true
   const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
  };

  // If the screen is in landscape mode, return true
  const isLandscape = () => {
    const dim = Dimensions.get('screen');
    return dim.width >= dim.height;
  };

  // Event Listener for orientation changes
  Dimensions.addEventListener('change', () => {
    setOrientation(isPortrait() ? 'portrait' : 'landscape');
  });

  // Hook State to display pokemon description
  const [display, setDisplay] = useState(false);
  const displayDesc = () => { setDisplay(!display) };

  return (
      <>
        <View style={display ? [styles.card, {backgroundColor:'#3aa7fd'}] : [styles.card, {backgroundColor:'#DCDCDC'}]}>
          <Text className={styles.accordion} onPress={displayDesc}>
              {display ?
              <>
              <Icon name='caretdown' size={10} style={[styles.accordionIcon, {color:'#fff'}]} />
              <Text style={[styles.pkmnName, {color:'#fff'}]}>
                {/* #{numero} -  */}
                {title}</Text>
              </>
              :
              <>
              <Icon name='caretright' size={10} style={[styles.accordionIcon, {color:'#000'}]} />
              <Text style={[styles.pkmnName, {color:'#000'}]}>
                {/* #{numero} -  */}
                {title}</Text>
              </>
            }
          </Text>
          {display ? 
            < Description orientation={orientation} 
                pkmn_description={desc} 
                pkmn_id={id}
                pkmn_img={img}
            /> 
          : null}
        </View>
      </>
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
    margin:'10px 0',
  },

  accordionIcon:{
    alignSelf:'center',
    padding: '10px',
    fontSize:'1.1rem'
  },

  pkmnName: {
    padding: '10px 5px',
    fontSize:'1.5rem'
  },
});

export default PokeCard;