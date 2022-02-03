import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
// import Nav from '../components/home/Nav';
import { Discovery, Download, Library, Setting } from '../fragments';


const Tab = createBottomTabNavigator();
const discoverScreen = 'Discovery';
const downloadScreen = 'Downloads';
const libraryScreen = 'My Library';
const settingScreen = 'Settings';

const Home = ({mangas, navigation}) => {
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
                        return console.log('some image ',Icons.iconName);
                    },
                })}
                screenOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                    labelStyle: { paddingBottom: 10, fontSize: 10 },
                    style: { padding: 10, height: 70 }
                }}
            >
                <Tab.Screen name={discoverScreen} component={Discovery} />
                <Tab.Screen name={libraryScreen} component={Library} />
                <Tab.Screen name={downloadScreen} component={Download} />
                <Tab.Screen name={settingScreen} component={Setting} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const Icons = {
    'search': "https://img.icons8.com/bubbles/100/000000/google-web-search.png",
    'search-outline': "https://img.icons8.com/clouds/100/000000/google-web-search.png",
    'download': "https://img.icons8.com/bubbles/100/000000/google-web-search.png",
    'download-outline': "https://img.icons8.com/clouds/100/000000/google-web-search.png",
    'book': "https://img.icons8.com/bubbles/100/000000/google-web-search.png",
    'book-outline': "https://img.icons8.com/clouds/100/000000/google-web-search.png",
    'settings': "https://img.icons8.com/bubbles/100/000000/google-web-search.png",
    'settings-outline': "https://img.icons8.com/clouds/100/000000/google-web-search.png",
}


    // <img src="https://img.icons8.com/external-bearicons-flat-bearicons/50/000000/external-setting-essential-collection-bearicons-flat-bearicons.png" />
    // <img src="https://img.icons8.com/bubbles/100/000000/literature.png"/>

// const styles = StyleSheet.create({
//     mangaList: {
//         justifyContent: 'space-evenly',
//         flexDirection: 'row',
//         flexWrap: 'wrap'
//     }
// })

export default Home


        // <SafeAreaView>
        //     <Nav />
        //     <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: "#121212"}}>
        //         <View style={styles.mangaList}>
        //             {mangas.map((manga, index) => {
        //                 return (
        //                     <MangaList
        //                         image={manga.manga_image}
        //                         title={manga.manga_name}
        //                         description={manga.manga_description}
        //                         key={index}
        //                         navigation={navigation} 
        //                     />
        //                 )
        //             })}
        //         </View>
        //     </ScrollView>
        // </SafeAreaView>