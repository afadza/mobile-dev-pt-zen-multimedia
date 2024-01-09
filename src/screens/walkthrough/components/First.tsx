import { View, Text, Image } from "@gluestack-ui/themed";
import { ImageBackground } from "react-native";
import { useTheme } from "@react-navigation/native";
import React from "react";

const First = () => {
  const { colors } = useTheme();
  return (
    <ImageBackground
      source={{
        uri: "https://i.ibb.co/dpQW0fM/download-3.jpg",
      }}
      accessibilityLabel="background"
      style={{ flex: 1 }}
    >
      <View flex={1} alignItems="center" backgroundColor={colors.background} opacity={0.5}  padding={20}>
        <Image
          source={{
            uri: "https://i.ibb.co/Jk0XnMC/man-climbing-on-mountain.png",
          }}
          alt="image"
          zIndex={100}
          opacity={1.0}
          accessibilityLabel="icon"
          width={400}
          height={400}
          marginTop={50}
        />
      </View>
    </ImageBackground>
  );
};

export default First;
