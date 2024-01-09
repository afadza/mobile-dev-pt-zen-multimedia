import { View, Text } from "@gluestack-ui/themed";
import { useTheme } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import useSplash from "../../hooks/useSplash";
import React from "react";

const Splash = () => {
  const navigation = useNavigation();
  useSplash({ navigation });
  const { colors } = useTheme();
  return (
    <View
      flex={1}
      backgroundColor={colors.background}
      justifyContent="center"
      alignItems="center"
    >
      <Text color={colors.text}>Splash Screen</Text>
    </View>
  );
};

export default Splash;
