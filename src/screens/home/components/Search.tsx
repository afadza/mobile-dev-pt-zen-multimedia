import { View, Input, InputField, InputSlot } from "@gluestack-ui/themed";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
import { useTheme } from "@react-navigation/native";
const Search = () => {
  const { colors } = useTheme();
  return (
    <View>
      <Input
        borderRadius={100}
        height={55}
        paddingVertical={15}
        paddingHorizontal={10}
        borderColor={colors.border}
      >
        <InputSlot pl="$3">
          <Feather name="search" size={20} color={colors.text} />
        </InputSlot>
        <InputField type="text" placeholder="Discover a city" />
        <InputSlot pr="$3">
          <Feather name="filter" size={20} color={colors.text} />
        </InputSlot>
      </Input>
    </View>
  );
};

export default Search;
