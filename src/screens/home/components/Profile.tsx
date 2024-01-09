import {
  View,
  Text,
  HStack,
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  VStack,
  Heading,
} from "@gluestack-ui/themed";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useTheme } from "@react-navigation/native";
import React from "react";

const Profile = () => {
  const { colors } = useTheme();
  return (
    <View
      width={"100%"}
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      paddingBottom={20}
    >
      <HStack space="md">
        <Avatar>
          <AvatarFallbackText>SS</AvatarFallbackText>
          <AvatarImage
            source={{
              uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
            }}
          />
        </Avatar>
        <VStack>
          <Heading size="sm">Hi Sofia</Heading>
          <Text
            size="sm"
            color={colors.text}
            fontWeight="bold"
            fontSize="$2xl"
            paddingVertical={5}
          >
            Good Afternoon
          </Text>
        </VStack>
      </HStack>
      <View
        backgroundColor={colors.border}
        padding={10}
        borderRadius={100}
        width={50}
        height={50}
        alignItems="center"
      >
        <Ionicons name="notifications-outline" size={24} color={colors.text} />
      </View>
    </View>
  );
};

export default Profile;
