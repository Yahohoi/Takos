import React, { Component } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const HomeRoute = () => <Text>Albums</Text>;

const settingsRoute = () => <Text>Recents</Text>;

const AppNavigator = () => {
    const [index,setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline', },
        { key: 'settings', title: 'Settings', focusedIcon: 'account-settings', unfocusedIcon: 'account-settings-outline', },
        { key: 'chats', title: 'Chats', focusedIcon: 'message', unfocusedIcon: 'message-outline', },
        { key: 'ai', title: 'AI', focusedIcon: 'robot', unfocusedIcon: 'robot-outline', },
    ]),

    renderscene = BottomNavigation.SceneMap({
        home: HomeRoute,
        settings: settingsRoute,
    });

    return (
            <BottomNavigation
                navigationState={this.state}
                onIndexChange={this._handleIndexChange}
                renderScene={this._renderScene}
            />
    );
}


