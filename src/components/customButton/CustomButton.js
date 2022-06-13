import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, type}) => {
  return (
        <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>  
            <Text style={[styles.text, styles[`container_${type}`]]}>{text}</Text>
        </Pressable>
  )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        borderRadius: 5,
        alignItems:'center',
        padding:15,
        marginVertical: 10,
    },

    container_PRIMARY:{
        backgroundColor:'#3B71F3',
    },

    container_TERTIARY:{
        color: 'black'
    },
    container_SECONDARY:{
        backgroundColor:"red",
        color: 'white'
    },
    container_FACEBOOK:{
        backgroundColor:"skyblue",
        color: 'black'
    },
    container_APPLE:{
        backgroundColor:"black",
        color: 'white'
    },

    text:{
        fontWeight:'bold',
        color:'white'
    },
})

export default CustomButton