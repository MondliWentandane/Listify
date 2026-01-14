import React, { ReactNode } from 'react';
import { StyleProp, StyleSheet, Text, TextInput, TextInputProps, TextStyle, View } from 'react-native';

interface InputFProps extends TextInputProps{
    label ?: string;
    style?: StyleProp<TextStyle>;
    styleL?: TextStyle | TextStyle[];
}

const InputComp:React.FC<InputFProps> = ({label,style,styleL, ...props}) => {
  return (
    <View style={{width:"100%", height:40 }}>
        <Text style={[styleL,styles.lblStyle]}>{label}</Text>
        <TextInput style={[style, styles.theStyle]} {...props} />
    </View>
  )
}

export default InputComp;

const styles = StyleSheet.create({
    theStyle:{
        width:"100%",
        height:"100%",
        borderRadius: 10,
        backgroundColor:"#e3e3e3",
        fontSize:18
    },
    lblStyle:{
        fontSize:20,
        color:"#ffffff"
    }
})
