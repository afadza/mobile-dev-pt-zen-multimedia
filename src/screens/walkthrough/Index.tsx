import React from "react";
import { View, Text, Pressable } from "@gluestack-ui/themed";
import useWalkThrough from "../../hooks/useWalkThrough";
import { useTheme } from "@react-navigation/native";

const Index = ({ navigation }: any) => {
  const { colors } = useTheme();
  const { renderComponent, handleButtonClick, activeComponent } =
    useWalkThrough({ navigation });

  return (
    <View flex={1}>
      <View flex={1}>{renderComponent()}</View>
      <View>
        <Pressable
          onPress={handleButtonClick}
          position="absolute"
          bottom={20}
          width={"100%"}
        >
          <View
            padding={20}
            backgroundColor={colors.primary}
            margin={10}
            borderRadius={10}
            alignItems="center"
          >
            <Text color={colors.text} fontWeight="bold">
              {activeComponent < 3 ? "Next" : "Get Started"}
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default Index;
