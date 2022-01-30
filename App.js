import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import axios from 'axios';
import React, { useEffect, useState } from "react";
import ChapterPage from "./pages/ChapterPage";
import Home from "./pages/Home";
import MangaDetail from "./pages/MangaDetail";

const baseURL = 'https://manga-reader-server.herokuapp.com/api/manga/';
const Stack = createStackNavigator();

export default function App() {

  const [mangas, setMangas] = useState([]);
    useEffect(() => {
        try {
            axios.get(`${baseURL}readm/`)
                .then(res => {
                    setMangas(res.data);
                }).catch(err => {
                    console.log(err);
                })
        } catch (error) {
            console.log(error);
        }
    }, [])
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={() => ({
          headerShown: false,
          gestureEnabled: true,
          ...TransitionPresets.SlideFromRightIOS,
        })}>
        <Stack.Screen name="Home">
          {props => <Home {...props} mangas={mangas} />}
        </Stack.Screen>
        <Stack.Screen name="Manga Detail">
          {props => <MangaDetail {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Read Manga">
          {props => <ChapterPage {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
