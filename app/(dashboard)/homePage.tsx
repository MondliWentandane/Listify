import BackgroundComp from '@/components/BackgroundComp';
import TextComp from '@/components/TextComp';
import React from 'react';
import headingImg from '@/assets/images/headingImg.png';
import { Dimensions, Image, ImageBackground, Pressable, StyleSheet, View } from 'react-native';
import applesImages from '@/assets/images/applesItem.png';
import CardComp from '@/components/dataComponents/CardComp';

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
      {/*Below is the option hat will appear whether the list is having items or not====*/}
      <TextComp style={{fontSize:29, marginLeft:"4%", color:"#000000"}}>Suggested</TextComp>
      <View style={styles.itemsContainer}>
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
        <CardComp/>
        <CardComp/>
        <CardComp/>

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
  },// Bellow is the style for the components that appear under suggestions
  itemsContainer:{
    width:"100%",
    height:"63%",
    display:"flex",
    flexDirection:"row",
    flexWrap:"wrap",
    gap:"3%",
    padding:"4%"
  },
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