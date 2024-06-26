
const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Constants from 'expo-constants'

import MenuLogin from "./screens/MenuLogin";
import Home from "./screens/Home";
import JadwalPelajaran from "./screens/JadwalPelajaran";
import MenuKalender from "./screens/MenuKalender";
import MenuPembelajaran from "./screens/MenuPembelajaran";
import MenuMatematika from "./screens/MenuMatematika";
import MenuIpa from "./screens/MenuIpa";
import MenuBindo from "./screens/MenuBindo";
import MenuNilaiSiswa from "./screens/MenuNilaiSiswa";


import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Inter-Medium": require("./GlobalStyles.js"),
    
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
     
      <NavigationContainer >
     
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="MenuLogin"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="MenuLogin"
              component={MenuLogin}
              options={{ headerShown: false }}
            />
            
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="MenuKalender"
              component={MenuKalender}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="JadwalPelajaran"
              component={JadwalPelajaran}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MenuPembelajaran"
              component={MenuPembelajaran}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MenuMatematika"
              component={MenuMatematika}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MenuIpa"
              component={MenuIpa}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MenuBindo"
              component={MenuBindo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MenuNilaiSiswa"
              component={MenuNilaiSiswa}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
        
      </NavigationContainer>
      
    </>
  );
};
export default App;
