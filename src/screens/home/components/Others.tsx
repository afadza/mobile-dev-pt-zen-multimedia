import React, { useState } from "react";
import { View, Text, Image, Pressable, FlatList } from "@gluestack-ui/themed";
import { useTheme } from "@react-navigation/native";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import useDestinations from "../../../hooks/useDestinations";

const Others = () => {
  const { colors } = useTheme();
  const { Destinations }: any = useDestinations();

  const renderItem = ({ item }: { item: any }) => (
    <View
      style={{
        alignItems: "center",
        width: "48%",
        marginBottom: 15,
        marginRight: 10,
      }}
    >
      <Image
        source={{
          uri: item.image,
        }}
        alt="image"
        style={{ width: "100%", height: 200, borderRadius: 10 }}
      />
      <View
        style={{
          backgroundColor: colors.background,
          marginTop: -105,
          width: "95%",
          padding: 10,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 24,
            height: 40,
            paddingVertical: 10,
            color: colors.text,
          }}
        >
          {item.name}
        </Text>
        <View style={{ alignItems: "center", flexDirection: "row" }}>
          <Feather name="map-pin" size={15} color={colors.text} />
          <Text style={{ marginLeft: 3, color: colors.text }}>
            {item.country}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <AntDesign name="star" size={15} color="yellow" />
          <Text style={{ marginLeft: 3, color: colors.text }}>
            {item.population.replace(" million", "k")}
          </Text>
        </View>
      </View>
    </View>
  );

  const ItemSeparator = () => <View style={{ width: 10 }} />;

  return (
    <View width={"100%"} marginTop={20} paddingHorizontal={10}>
      <View
        paddingHorizontal={5}
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Text
          fontWeight="bold"
          fontSize={"$4xl"}
          paddingVertical={15}
          color={colors.text}
        >
          Others
        </Text>
        <Pressable
          $active-bgColor={colors.border}
          alignItems="center"
          display="flex"
          justifyContent="center"
          marginBottom={10}
          padding={8}
          borderRadius={5}
        >
          <Text>Show all</Text>
        </Pressable>
      </View>

      <FlatList
        data={Destinations}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        ItemSeparatorComponent={ItemSeparator}
        contentContainerStyle={{ paddingHorizontal: 5 }}
      />
    </View>
  );
};

export default Others;
