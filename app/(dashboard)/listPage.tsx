import BackgroundComp from '@/components/BackgroundComp'
import TextComp from '@/components/TextComp';
import React from 'react'
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';

const listPage = () => {
  return (
    <BackgroundComp style={styles.container}>
      <View style={styles.firstSect}>
        <TextComp style={styles.textSty}>Cart</TextComp>
      </View>
      <View style={styles.secSection}>
        <Pressable><TextComp>All</TextComp></Pressable>
        <Pressable><TextComp>Food</TextComp></Pressable>
        <Pressable><TextComp>Drinks</TextComp></Pressable>
        <Pressable><TextComp>Household</TextComp></Pressable>
      </View>
      <ScrollView style={styles.thirdSect} >
        <TextComp>Hello</TextComp>
      </ScrollView>
    </BackgroundComp>
  )
}

export default listPage;

const styles= StyleSheet.create({
  container:{
    backgroundColor:"#ffffff"
  },
  firstSect:{
    width:"100%",
    alignItems:"center",
    paddingTop:"5%"
  },
  textSty:{
    fontSize:30,
  },
  secSection:{
    width:"100%",
    display:"flex",
    flexDirection:"row",
    gap:"6%",
    justifyContent:"space-between"
  },
  thirdSect:{
    width:"100%",
    height:"100%",
    backgroundColor:"#e18a8a"
  }
})
