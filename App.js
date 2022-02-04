import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets
} from "@react-navigation/stack";
import React from "react";
import ChapterPage from "./screens/ChapterPage";
import Home from "./screens/Home";
import MangaDetail from "./screens/MangaDetail";



const Stack = createStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={() => ({
          headerShown: false,
          gestureEnabled: true,
          ...TransitionPresets.SlideFromRightIOS,
        })}
      >
        <Stack.Screen name="Home">
          {(props) => <Home {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Manga Detail">
          {(props) => <MangaDetail {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Chapter Page">
          {(props) => <ChapterPage {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
