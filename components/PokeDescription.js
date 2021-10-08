import React, { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

const Description = (
  {orientation,
 pkmn_id,
 pkmn_description,
 pkmn_img
}) => {
    return (   
     <>
      { orientation==='landscape' ?
      <>
      <View style={styles.pkmnDesc}>
       <View style={[styles.pkmnDescContent, {flexDirection: 'row', alignContent: 'center'}]}>
         <Image source={{
         uri: `${pkmn_img}`,
         }}
         style={{width: 200, height: 200 }}
         />
        <Text style={[styles.pkmnDesc_p, {alignSelf:'center'}]}>{pkmn_description}</Text>
      </View>
    </View> 
    </>  
      :
      <>
      <View style={styles.pkmnDesc}>
       <View style={[styles.pkmnDescContent, {alignItems:'stretch'}]}>
         <Image source={{
         uri: `${pkmn_img}`,
         }}
         style={{width: '100%', height:300, alignSelf:'center' }}
         />
        <Text>{pkmn_description}</Text>
       </View>
     </View> 
     </>
   }
   </>
    )
  };

  const styles = StyleSheet.create({
    pkmnDesc:{
      flex:1,
      width:'100%',
      height:500,
      backgroundColor:'#fff',
  },
  
  pkmnDescContent:{
      flex:1,
      width:'100%',
      padding:'10px',
  },

  pkmnDesc_p:{
    paddingLeft:'30px',
  }
  });

  export default Description;