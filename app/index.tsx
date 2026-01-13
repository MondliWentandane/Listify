import BackgroundComp from '@/components/BackgroundComp';
import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import LogoImg from "@/assets/images/welcomeImg.png";
import TextComp from '@/components/TextComp';
import { router } from 'expo-router';

const index: React.FC = () => {
  return (
    <BackgroundComp style={styles.container}>
      <Image source={LogoImg} style={styles.logoStyle}/>
      <View style={styles.bottomSect}>
        <TextComp style={[{fontSize:21}]}>Simple and easy grocery tracking</TextComp>
        <Pressable onPress={()=> router.push("/homePage")} style={styles.btn}>
          <TextComp style={styles.btnText}>Get Started</TextComp>
        </Pressable>
      </View>
    </BackgroundComp>
  )
}
// WIFI@LCX2@20
export default index;

const styles= StyleSheet.create({
  container:{
    justifyContent:"space-evenly",
    alignItems:"center",
    display:"flex",
    flexDirection: 'column',
    gap:"20%",
    
  },
  logoStyle:{
    width:"80%",
    height:"10%",
    marginTop:"50%"
  },
  bottomSect:{
    alignItems:"center",
  },
  btn:{
    marginTop:"3%",
    backgroundColor:"#425af2",
    width:270,
    paddingVertical:"2%",
    borderRadius:10
  },
  btnText:{
    fontSize:22,
    alignSelf:"center",
    color:"#ffffff",
    alignItems:"center",


  }
})