import { View, Text, Image } from "@gluestack-ui/themed";
import { ImageBackground } from "react-native";
import React from "react";

const First = () => {
  return (
    <ImageBackground
      source={{
        uri: "https://i.ibb.co/dpQW0fM/download-3.jpg",
      }}
      accessibilityLabel="background"
      style={{ flex: 1, padding: 20 }}
    >
      <View flex={1} alignItems="center">
        <Image
          source={{
            uri: "https://i.ibb.co/Jk0XnMC/man-climbing-on-mountain.png",
          }}
          alt="image"
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
