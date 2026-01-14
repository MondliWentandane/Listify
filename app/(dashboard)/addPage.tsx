import BackgroundComp from '@/components/BackgroundComp';
import InputComp from '@/components/InputComp';
import TextComp from '@/components/TextComp';
import React from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';

const addPage = () => {
  return (
    <BackgroundComp style={styles.container}>
     <View style={styles.card}>
      <TextComp style={{color:"#ffffff", fontSize:26, marginBottom:"0%"}}>New Item</TextComp>
      <InputComp label='Item Name'/>
      <InputComp label='Quantity'/>
      <InputComp label='Shop Name'/>
      <TextInput multiline numberOfLines={4} placeholder="Additional Notes(optional)" style={styles.textArea}/>
      <View style={{backgroundColor:"#e3e3ef", width:"100%", height:"10%"}}>
        <Pressable>
          
        </Pressable>
      </View>
      </View> 
    </BackgroundComp>
  )
};

export default addPage;

const styles=StyleSheet.create({
  container:{
    justifyContent:"center",
    alignItems:"center",

  },
  card:{
    width:"95%",
    height:"80%",
    backgroundColor:"#000000",
    borderRadius:20,
    padding:12,
    alignItems:"center",
    display:"flex",
    flexDirection:"column",
    gap:"7%"
  },
  textArea: {
    height: "20%",
    width:"100%",
    textAlignVertical: 'top', // VERY important for Android
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#e3e3e3',
    marginTop:10
  }
})
