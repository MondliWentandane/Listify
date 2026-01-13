import BackgroundComp from '@/components/BackgroundComp';
import TextComp from '@/components/TextComp';
import React from 'react';
import headingImg from '@/assets/images/headingImg.png';
import emptyImg from "@/assets/images/emptyImg.jpg";
import { Dimensions, Image, ImageBackground, StyleSheet, View } from 'react-native';

const homePage: React.FC = () => {
  return (
    <BackgroundComp style={styles.container}>
      <ImageBackground source={headingImg} style={styles.headingStyle} resizeMode='cover'>
        <View style={styles.headOne}>
          <TextComp style={{fontSize:30, color:"#ffffff"}}>Shopping</TextComp>
        </View>
        <View style={styles.headTwo}>
          <TextComp style={{ color:"#ffffff"}}>Shop smarter,</TextComp>
          <TextComp style={{ color:"#ffffff", paddingRight:"5%"}}>stay organized</TextComp>
        </View>
      </ImageBackground>
      <View style={styles.suggSect}>
        <Image source={emptyImg}/>
        <TextComp style={{fontSize:29}}>Cart Empty...!!!</TextComp>
      </View>
    </BackgroundComp>
  )
}

export default homePage;

const { height } = Dimensions.get('window');

const styles=StyleSheet.create({
  container:{
    paddingHorizontal:0
  },
  headingStyle:{
    width:"100%",
    height: height * 0.25,
    justifyContent:"space-between",
    backgroundColor:"#0e327e"
  },
  headOne:{
    alignItems:"center",
    width:"100%",
    paddingTop:"0%"
  },
  headTwo:{
    alignItems:"flex-end",
    width:"100%",
    paddingBottom:"8%",
  },
  suggSect:{
    height:"65%",
    justifyContent:"center",
    alignItems:"center"
  }
})