import React from "react";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "./src/layout/Main";
import Splash from "./src/screens/splash/Splash";
import Through from "./src/screens/walkthrough/Index";
import Login from "./src/screens/login/Login";
import MyTheme from "./src/assets/Theme";
import { LogBox } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  const Stack = createNativeStackNavigator();
  LogBox.ignoreAllLogs();
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer theme={MyTheme}>
        <GluestackUIProvider config={config}>
          <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="Through" component={Through} />
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        </GluestackUIProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
