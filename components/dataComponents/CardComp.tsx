import React from 'react'
import applesImages from '@/assets/images/applesItem.png';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import TextComp from '../TextComp';

const CardComp = () => {
  return (
    <View style={styles.itemCard}>
        <Image source={applesImages} style={styles.imgCard}/> 
        <View style={styles.secSectCard}>
            <TextComp style={{color:"#ffffff"}}>Apples</TextComp>
            <View style={styles.insideLastSection}>
            <TextComp style={{color:"#ffffff", fontSize:16, textAlignVertical:"bottom"}}>2kg</TextComp>
            <Pressable>
                {({pressed})=>(
                <Image source={pressed? require("@/assets/Icons/checkGreenIcon.png")
                        : require("@/assets/Icons/checkWhiteIcon.png")
                }/>
                )}
            </Pressable>
            </View>
        </View>
    </View> 
  )
}

export default CardComp;

const styles=StyleSheet.create({
  itemCard:{
    display:"flex",
    flexDirection:"column",
    height:"45%",
    width:"48%",
    borderRadius:15,
    backgroundColor:"#000000",
    padding:"1%"
  },
  imgCard:{
    width:"100%",
    height:"55%"
  },
  secSectCard:{
    width:"100%",
    height:"45%",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    paddingHorizontal:"1%",
    paddingVertical:"0%",
  },
  insideLastSection:{
    width:"100%",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    paddingBottom:"2%",
    
  }
})
