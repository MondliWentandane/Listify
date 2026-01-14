import appleImg from '@/assets/images/AppleItem.png';
import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import TextComp from '../TextComp';

const ItemComp = () => {
  return (
            <View style={styles.card}>
            <View style={styles.theLeft}>
                <Image source={appleImg} style={styles.itemImg}></Image>
                <View>
                    <TextComp style={styles.itemName}>Apple</TextComp>
                    <TextComp style={styles.itemQuantity}>2kg</TextComp>
                </View>
            </View>
            <View style={styles.theRight}>
                <Pressable>
                    {({pressed})=> (
                        <Image source={pressed? require('@/assets/Icons/editIconBlue.png')
                                              : require("@/assets/Icons/editIcon.png")
                        } resizeMode='contain' style={{width:32, height:32, marginTop:"13%"}}/>
                    )}
                </Pressable>
                <View>
                    <Pressable>
                        {({pressed})=>(
                            <Image source={pressed? require('@/assets/Icons/moreIconBlue.png')
                                          : require('@/assets/Icons/moreIcon.png')
                            } style={{width:34, height:36, marginTop:"7%"}}/>
                        )}
                    </Pressable>
                    <Pressable>
                        {({pressed})=>(
                            <Image source={pressed? require("@/assets/Icons/deleteIcon.png")
                                            : require("@/assets/Icons/deleteRedIcon.png")
                            } style={{width:32, height:32, marginTop:"13%"}}/>
                        )}
                    </Pressable>
                </View>
            </View>
        </View>
  )
}

export default ItemComp;


const styles= StyleSheet.create({
//== Bellow Is the  style for the cards that will hold the items
  card:{
    width:"100%",
    height:80,
    backgroundColor:"#000000",
    borderRadius: 15,
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:"1.7%",
    marginBottom:"1%"
    
    
  },
  theLeft:{
    width:"30%",
    height:"100%",
    display:"flex",
    flexDirection:'row',
    gap:"8%"
  },
  theRight:{
    width:"18%",
    height:"100%",
    display:"flex",
    flexDirection:'row',
    gap:"3%",
    justifyContent:"flex-end"
  },
  itemImg:{
    width:"70%",
    height:"87%",
    borderRadius:10,
    alignSelf:"center"
  },
  itemName:{
    fontSize:23,
    color:"#ffffff",
  },itemQuantity:{
    fontSize:17,
    color:"#ffffff",
  }
})
