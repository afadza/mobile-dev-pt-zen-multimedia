import { View, Text, Image } from "@gluestack-ui/themed";
import { ImageBackground } from "react-native";
import React from "react";

const Third = () => {
  return (
    <ImageBackground
      source={{
        uri: "https://i.ibb.co/xmGhKFx/download-2.jpg",
      }}
      accessibilityLabel="background"
      style={{ flex: 1 }}
    >
      <View
        flex={1}
        alignItems="center"
        backgroundColor="rgba(255, 255, 255, 0.5)"
      >
        <Image
          source={{
            uri: "https://i.ibb.co/cLwDB6B/family-enjoying-picnic.png",
          }}
          alt="image"
          accessibilityLabel="icon"
          width={400}
          height={400}
          marginTop={50}
        />
        <View padding={10} alignItems="center">
          <Text fontWeight="bold" fontSize={"$2xl"}>
            Pay Bills & Payments
          </Text>
          <Text textAlign="center" fontSize={"$xl"} marginTop={40}>
            Manage your all earnings, expenses & every penny anyhere, anytime
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Third;
