import React, { Component } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { BottomNavigation, Text } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeRoute from './components/Home';
import Login from './components/Login'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const settingsRoute = () => <Text>Recents</Text>;

const chatRoute = () => <Text>chats</Text>

const aiRoute = () => <Text>ai</Text>

const AppNavigator = () => {
    const [index,setIndex] = React.useState(0);
    const routes = [
        { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline', activeColor: "#4287f5", },
        { key: 'settings', title: 'Settings', focusedIcon: 'account-settings', unfocusedIcon: 'account-settings-outline', activeColor: "#80ffbf", },
        { key: 'chats', title: 'Chats', focusedIcon: 'message', unfocusedIcon: 'message-outline', activeColor: "#ffe880", },
        { key: 'ai', title: 'AI', focusedIcon: 'robot', unfocusedIcon: 'robot-outline', activeColor: "#ff6969", },
    ]

    const renderscene = BottomNavigation.SceneMap({
        home: HomeRoute,
        settings: settingsRoute,
        chats: chatRoute,
        ai: aiRoute,
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderscene}
        />
    );
}

function App() {
  return (
    <Login/>
  );
}


export default App;
