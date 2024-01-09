import { useIsFocused, useTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import Home from "../screens/home/Home";
import Saved from "../screens/saved";
import Add from "../screens/add";
import Notifications from "../screens/notifications";
import Profile from "../screens/profile";
import { View } from "@gluestack-ui/themed";
const Tab = createBottomTabNavigator();

const Main = () => {
  const { colors } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.background,
        },
        tabBarIcon: ({ focused }) => {
          const isFocused = useIsFocused();
          let iconComponent;

          if (route.name === "Home") {
            iconComponent = isFocused ? (
              <Octicons name="home" size={24} color={colors.text} />
            ) : (
              <Octicons name="home" size={24} color={colors.border} />
            );
          } else if (route.name === "Saved") {
            iconComponent = isFocused ? (
              <AntDesign name="heart" size={24} color={colors.text} />
            ) : (
              <AntDesign name="heart" size={24} color={colors.border} />
            );
          } else if (route.name === "Add") {
            iconComponent = isFocused ? (
              <View
                backgroundColor={colors.primary}
                padding={20}
                marginTop={-35}
                borderRadius={100}
              >
                <AntDesign name="plus" size={24} color={colors.text} />
              </View>
            ) : (
              <View
                backgroundColor="#355CFF"
                padding={20}
                marginTop={-35}
                borderRadius={100}
              >
                <AntDesign name="plus" size={24} color={colors.text} />
              </View>
            );
          } else if (route.name === "Notifications") {
            iconComponent = isFocused ? (
              <Ionicons
                name="notifications-sharp"
                size={24}
                color={colors.text}
              />
            ) : (
              <Ionicons
                name="notifications-sharp"
                size={24}
                color={colors.border}
              />
            );
          } else if (route.name === "Profile") {
            iconComponent = isFocused ? (
              <FontAwesome name="user" size={24} color={colors.text} />
            ) : (
              <FontAwesome name="user" size={24} color={colors.border} />
            );
          }
          return iconComponent;
        },
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: colors.border,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Saved" component={Saved} />
      <Tab.Screen name="Add" component={Add} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
export default Main;
