import React, { Component } from 'react';
import { BottomNavigation, Text, } from 'react-native-paper';
import { StyleSheet, View, Pressable, Image, TextInput, } from 'react-native';
const icon = require('../icons/dy.png')
const username = 'yahohoi';

const HomeRoute = () => (
  <View style={styles.container}>
    <View style={styles.profile}>
      <Pressable style={styles.logo}>
        <Image style={styles.logo} source={icon} />
      </Pressable>
      <Text style={styles.usernameText}>{username}</Text>
    </View>
    
  </View>
);

const styles = StyleSheet.create({
    chatWordsMine:{
      color: "#e82b00",
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      borderBottomLeftRadius: 30,
    },
    chatWordsOther:{
      color: "#e82b00",
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      borderBottomRightRadius: 30,
    },
    chatWords: {
      fontSize:20,
      color:'black',
    },
    time: {
      fontSize:10,
      color:'#b3b3b3'
    },
    settingText: {
      fontWeight: 'bold',
      color:'#000000',
      fontSize: 25,
      alignItems:'center',
    },
    chatIcon:{
      width:50,
      height:50,
      borderRadius: 50,
      alignItems:'center',
    },
    settingButton:{
      width:40,
      height:40,
    },
    settingSubText: {
      color:'#000000',
      fontSize: 10,
    },
    listBox: {
      flexDirection: 'row',
      color: '#ffffff',
      borderColor: '#d9e7ff',
      borderRadius: 10,
      padding: 10,
      marginVertical:2,
      marginHorizontal:4,
    },
    container: {
      flexDirection: 'column',
      backgroundColor: '#ffffff'
    },
    input: {
      width:'94%',
      flexDirection:'column',
      height: 40,
      borderWidth: 1,
      borderRadius: 10,
      margin: 12,
      alignItems: 'center',
      position: 'relative',
      top: 5,
      backgroundColor: '#f0f0f0',
      borderColor: "#f0f0f0",
    },
    header: {
      flex: 1,
    },
    profile: {
      flexDirection: 'row',
      position: 'relative',
      top: 10,
      left: 10,
    },
    texts: {
      flexDirection: 'row',
      top: 15,
      left: 15,
    },
    usernameText: {
      flexDirection: 'column',
      fontSize: 30,
      color: '#000000',
      position: 'relative',
      top:7.5,
      left:10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width:70,
      height:70,
      borderRadius: 50,
    },
  });


export default HomeRoute;