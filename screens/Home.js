import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Image } from 'react-native';
import { Discovery, Download, Library, Setting } from '../fragments';


const Tab = createBottomTabNavigator();
const discoverScreen = 'Discovery';
const downloadScreen = 'Downloads';
const libraryScreen = 'My Library';
const settingScreen = 'Settings';

const Home = ({ navigation }) => {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator
                initialRouteName={discoverScreen}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === discoverScreen) {
                            iconName = focused ? 'search' : 'search-outline';
                        } else if (route.name === downloadScreen) {
                            iconName = focused ? 'download' : 'download-outline';
                        } else if (route.name === libraryScreen) {
                            iconName = focused ? 'book' : 'book-outline';
                        } else if (route.name === settingScreen) {
                            iconName = focused ? 'settings' : 'settings-outline';
                        }
                        return <Icons name={iconName} size={size} color={color}/>
                    },
                    // tabBarOptions: {
                    //     activeTintColor: 'tomato',
                    //     inactiveTintColor: 'gray',
                    //     labelStyle: { paddingBottom: 10, fontSize: 10 },
                    //     style: { padding: 10, height: 100 },
                    // },
                    // swipeEnabled: true,
                })}
            >
                <Tab.Screen name={discoverScreen}>
                    {(props) => <Discovery {...props} navigation={navigation} />}
                </Tab.Screen>
                <Tab.Screen name={libraryScreen}>
                    {(props) => <Library {...props} />}
                </Tab.Screen>
                <Tab.Screen name={downloadScreen}>
                    {(props) => <Download {...props} />}
                </Tab.Screen>
                <Tab.Screen name={settingScreen} >
                    {(props) => <Setting {...props} />}
                </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )
}
function Icons ({ name }) {
    if (name === 'search' || name === 'search-outline') {
        return (
            <Image source={{ uri: 'https://img.icons8.com/bubbles/50/000000/google-web-search.png' }}
                style={{ width: 25, height: 25 }} />
        )
    } else if (name === 'download' || name === 'download-outline') {
        return (
            <Image source={{ uri: 'https://img.icons8.com/bubbles/100/000000/download.png' }}
                style={{ width: 25, height: 25 }} />
        )
    } else if (name === 'book' || name === 'book-outline') {
        return (
            <Image source={{ uri: 'https://img.icons8.com/bubbles/100/000000/literature.png' }}
                style={{ width: 25, height: 25 }} />
        )
    } else if (name === 'settings' || name === 'settings-outline') {
        return (
            <Image source={{ uri: 'https://img.icons8.com/external-bearicons-flat-bearicons/50/000000/external-setting-essential-collection-bearicons-flat-bearicons.png' }}
                style={{ width: 25, height: 25 }} />
        )
    }
}

export default Home


