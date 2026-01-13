import React from 'react';
import emptyImg from "@/assets/images/emptyImg.jpg";
import { Image, StyleSheet, View } from 'react-native';
import TextComp from './TextComp';

const EmptyCartComp = () => {
  return (
      <View style={styles.suggSect}>
        <Image source={emptyImg}/>
        <TextComp style={{fontSize:29}}>Cart Empty...!!!</TextComp>
      </View>
  )
}

export default EmptyCartComp;

const styles=StyleSheet.create({
  suggSect:{
    height:"65%",
    justifyContent:"center",
    alignItems:"center"
  }
})
