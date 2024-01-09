import { View, Text, Image, Pressable } from "@gluestack-ui/themed";
import { useTheme } from "@react-navigation/native";
import React, { ReactNode } from "react";
import useDestinations from "../../../hooks/useDestinations";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";

const Popular = () => {
  const { colors } = useTheme();
  const { Popular }: any = useDestinations();
  return (
    <View width={"100%"} marginTop={15}>
      <View
        paddingHorizontal={20}
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Text
          fontWeight="bold"
          fontSize={"$4xl"}
          paddingVertical={10}
          color={colors.text}
        >
          Popular
        </Text>
        <Pressable $active-bgColor={colors.border} alignItems="center" display="flex" justifyContent="center" marginBottom={10} padding={8} borderRadius={5}>
          <Text>Show all</Text>
        </Pressable>
      </View>

      <View
        paddingHorizontal={20}
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        {Popular?.map(
          (
            item: {
              population: any;
              country: ReactNode;
              name: ReactNode;
              image: any;
            },
            index: React.Key | null | undefined
          ) => (
            <View alignItems="center" width={"49%"}>
              <Image
                source={{
                  uri: item.image,
                }}
                alt="image"
                style={{ width: "100%", height: 200, borderRadius: 10 }}
              />
              <View
                backgroundColor={colors.background}
                marginTop={-85}
                width={"95%"}
                padding={10}
                borderRadius={10}
              >
                <Text
                  fontWeight="bold"
                  fontSize={24}
                  height={40}
                  paddingVertical={10}
                  color={colors.text}
                >
                  {item.name}
                </Text>
                <View alignItems="center" display="flex" flexDirection="row">
                  <Feather name="map-pin" size={15} color={colors.text} />
                  <Text marginLeft={3} color={colors.text}>
                    {item.country}
                  </Text>
                  <View
                    display="flex"
                    flexDirection="row"
                    marginLeft={10}
                    alignItems="center"
                  >
                    <AntDesign name="star" size={15} color="yellow" />
                    <Text marginLeft={3} color={colors.text}>
                      {item.population.replace(" million", "k")}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          )
        )}
      </View>
    </View>
  );
};

export default Popular;
