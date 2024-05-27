import React, { Component } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { BottomNavigation, Text } from 'react-native-paper';
import { StyleSheet, View, Image, ImageBackground, Pressable, TextInput } from 'react-native';
import HomeRoute from './components/Home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

type HomeNavigationParamList = {
  Home: undefined;
  Notifications: undefined;
};

const Login = () =>(
  <View>
    <ImageBackground>
      <TextInput placeholder=" Find your chats" style={styles.input} />
    </ImageBackground>
  </View>
)
function Sprash(){
  <View style={styles.container}>
    <ImageBackground source={require("./icons/sprash.png")} style={styles.image}>
      <Text style={styles.text}>Welcome to Tako's!</Text>
      <Pressable onPress={Login}>
        <Text style={styles.regibutton}>Log in</Text>
      </Pressable>
      <Pressable>
        <Text style={styles.regibutton}>Register</Text>
      </Pressable>
    </ImageBackground>
  </View>
}
export default class App extends React.Component {
  render() {
    return(
      <NavigationContainer>

      </NavigationContainer>
    );
  }
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 30,
    lineHeight: 60,
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  regibutton: {
    margin: 8,
    marginHorizontal: 64,
    borderRadius: 10,
    color: 'white',
    fontSize: 26,
    backgroundColor: '#001f52c0',
    textAlign: 'center'
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
});