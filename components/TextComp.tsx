import React from 'react'
import { StyleSheet, Text, TextProps, TextStyle } from 'react-native'

interface TextCompProps extends TextProps {
    chidlren?: React.ReactNode;
    style?: TextStyle | TextStyle[];
}

const TextComp: React.FC<TextCompProps> = ({children, style}) => {
  return (
    <Text style={[styles.text, style]}>
        {children}
    </Text>
  )
}

export default TextComp;

const styles= StyleSheet.create({
  text:{
    color:"#425af2",
    fontSize: 20,
    fontWeight:"bold"
  }
})
