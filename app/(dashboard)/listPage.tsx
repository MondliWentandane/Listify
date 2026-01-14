import BackgroundComp from '@/components/BackgroundComp';
import ItemComp from '@/components/dataComponents/ItemComp';
import TextComp from '@/components/TextComp';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';



const listPage = () => {
  return (
    <BackgroundComp style={styles.container}>
      <View style={styles.firstSect}>
        <TextComp style={styles.textSty}>Cart</TextComp>
      </View>
      <View style={styles.secSection}>
        <Pressable><TextComp>All</TextComp></Pressable>
        <Pressable><TextComp style={{color:"#000000"}}>Food</TextComp></Pressable>
        <Pressable><TextComp style={{color:"#000000"}}>Drinks</TextComp></Pressable>
        <Pressable><TextComp style={{color:"#000000"}}>Household</TextComp></Pressable>
      </View>
      <ScrollView style={styles.thirdSect}>
        <ItemComp/>
        <ItemComp/>
        <ItemComp/>
        <ItemComp/>
        <ItemComp/>
        <ItemComp/>
        <ItemComp/>
        <ItemComp/>
        <ItemComp/>
        <ItemComp/>
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
    color:"#3d3c3c"
  },
  secSection:{
    width:"100%",
    display:"flex",
    flexDirection:"row",
    gap:"6%",
    justifyContent:"space-between",
    paddingBottom:"2%"
  },
  thirdSect:{
    width:"100%",
    maxHeight: "86%",
  }
})
