import React, { ReactNode } from "react";
import { View, Text, Image, ScrollView } from "@gluestack-ui/themed";
import { useTheme } from "@react-navigation/native";
import useDestinations from "../../../hooks/useDestinations";

const TopPlace = () => {
  const { colors } = useTheme();
  const { TopPlace }: any = useDestinations();
  return (
    <View marginTop={15}>
      <View paddingLeft={20}>
        <Text
          fontWeight="bold"
          fontSize={"$4xl"}
          paddingVertical={10}
          color={colors.text}
        >
          Top Place
        </Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: "row" }} paddingLeft={20}>
          {TopPlace?.map(
            (
              item: {
                name: ReactNode;
                country: ReactNode;
                description: ReactNode;
                continent: ReactNode;
                population: any;
                image: any;
              },
              index: React.Key | null | undefined
            ) => (
              <View
                key={index}
                height={400}
                style={{ width: 300, marginRight: 10 }}
                alignItems="center"
                borderRadius={10}
              >
                <Image
                  source={{ uri: item.image }}
                  alt="image"
                  style={{ width: "100%", height: 400, borderRadius: 10 }}
                />
                <View
                  style={{
                    width: "95%",
                    backgroundColor: colors.background,
                    padding: 20,
                    borderRadius: 10,
                    marginTop: -200,
                  }}
                >
                  <Text
                    fontWeight="bold"
                    fontSize={24}
                    height={40}
                    paddingVertical={10}
                    color={colors.text}
                  >
                    {item.name}, {item.country}
                  </Text>
                  <Text height={50}>{item.description}</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: 10,
                    }}
                  >
                    <Image
                      source={{
                        uri: item.image,
                      }}
                      alt="image"
                      style={{ width: 50, height: 50, borderRadius: 25 }}
                    />
                    <View marginLeft={10} display="flex" flexDirection="column">
                      <Text fontWeight="bold" color={colors.text}>
                        {item.continent}
                      </Text>
                      <Text color="$yellow500" width={100} overflow="hidden">
                        {item.population.replace(" million", "k")} reviews
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            )
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default TopPlace;
