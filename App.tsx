/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component } from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { VirtualizedList, ScrollView, StyleSheet, Text, View, Pressable, Image, AppRegistry, SectionList, TextInput, FlatList, } from 'react-native';
//import {*} from 'react-native-elements'

type Props = {};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

type List = {
    title: string;
    instruct: string;
}

async function CallAI(query=""){
  const data = { prompt: query };
  const res = await fetch("http://api.natsukiproject.com/v2/s1/ai", {
    mode: "cors",
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
  if(!res.ok) {
  return
  }
  const result = await res.json()
  return(result)
}

type ItemProps = {title: string};
const Settings: List[] = [
    {
        title: "Username",
        instruct: "Change username"
    },
    {
        title: "Icon",
        instruct: "Change icon",
    },
    {
        title: "Notification",
        instruct: "Change settings about notification",
    },
];
const Chats: List[] = [
    {
        title: "natsukiAI",
        instruct: "Let's ask a question!",
    },
];
const Item = ({title}: ItemProps) => (
  <View>
    <Pressable style={styles.listBox}>
      <Text style={styles.settingText}>{title}</Text>
    </Pressable>
  </View>
);

const ChatItem = ({navigation, title, onPress, backgroundColor}: ItemProps) => (
    <View>
        <Pressable style={styles.listBox} onPress={() => navigation.navigate('ChatWindow')}>
            <Image style={styles.chatIcon} source={require(".//icons//dy.png")}/>
            <Text style={styles.settingText}>{title}</Text>
        </Pressable>
    </View>
);

const ChatWordsMine = ({words, time}) => (
    <View>
        <Text>{time}</Text>
        <Pressable style={styles.chatWordsMine}>
            <Text style={styles.chatWords}>{words}</Text>
        </Pressable>
    </View>
);

const ChatWordsOther = ({words, time}) => (
    <View>
        <Text>{time}</Text>
        <Pressable style={styles.chatWordsOther}>
            <Text style={styles.chatWords}>{words}</Text>
        </Pressable>
    </View>
);

const username = "yahohoi";
const icon = require(".//icons//dy.png");

function Home({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Pressable style={styles.logo} onPress={() => navigation.navigate('Settings') }>
          <Image style={styles.logo} source={icon} />
        </Pressable>
        <Text style={styles.usernameText}>{username}</Text>
      </View>
      <TextInput placeholder=" Find your chats" style={styles.input} />
      <Pressable style={styles.buttonStyle} onPress={() => navigation.navigate('Settings') }>
        <Image style={styles.settingButton} source={require(".//icons//9690-600x600.jpg")}/>
      </Pressable>
      <FlatList
        data={Chats}
        renderItem={({item}) => <ChatItem title={item.title} />}
      />
    </View>
    );
}

function SettingsWindow({navigation}) {
  return (
    <View style={styles.setting}>
      <FlatList
        data={Settings}
        renderItem = {({item}) => <Item title={item.title} />}
      />
    </View>
  );
}

function ChatWindow({navigation}) {
    return (
        <View>

        </View>
    )
}

export default class App extends Component<Props> {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home}/>
          <Tab.Screen name="Settings" component={SettingsWindow} />
          <Tab.Screen name="Chat" component={ChatWindow} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

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

export default App;