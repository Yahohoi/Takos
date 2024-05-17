import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const HomesRoute = () => <Text>Home</Text>;

const SettingsRoute = () => <Text>Settings</Text>;

const ChatRoute = () => <Text>Chats</Text>;

const AIRoute = () => <Text>AI</Text>;

export default class AppNavigator extends React.Component {
    state = {
        index: 0,
        routes: [
            { key: 'home', title: 'Home', icon: 'home', color: '#f72f02' },
            { key: 'settings', title: 'Settings', icon: 'account-settings', color: '#000000' },
            { key: 'chats', title: 'Chats', icon: 'message', color: '#024dfa'},
            { key: 'ai', title: 'AI', icon: 'robot', color: '#8b02fa' },
        ],
    };

    _handleIndexChange = index => this.setState({ index });

    _renderScene = BottomNavigation.SceneMap({
        home: HomesRoute,
        settings: SettingsRoute,
        chats: ChatRoute,
        ai: AIRoute,
    });

    render() {
        return (
            <BottomNavigation
                navigationState={this.state}
                onIndexChange={this._handleIndexChange}
                renderScene={this._renderScene}
                shifting={true}
            />
        );
    }
}