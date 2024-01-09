import React from "react";
import { View, Text, ScrollView, Button, Image } from "@gluestack-ui/themed"; 
import Carousel from "react-native-snap-carousel";
import { Dimensions } from "react-native";
import { useTheme } from "@react-navigation/native";

const Categories = [
  "Popular",
  "Most Viewed",
  "Trending",
  "Recommended",
  "Recent",
];

const Images = [
  "https://cdn.pixabay.com/photo/2019/02/21/19/00/paris-4011990_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/06/29/04/41/tokyo-tower-825196_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/03/11/12/31/buildings-668616_1280.jpg",
  "https://cdn.pixabay.com/photo/2022/02/15/13/00/building-7014904_1280.jpg",
];

const Category = () => {
  const { colors } = useTheme();
  const { width } = Dimensions.get("window");

  const renderItem = ({ item }: any) => {
    return (
      <View width={width} paddingHorizontal={10}>
        <Image
          source={{ uri: item }}
          width={1000}
          height={200}
          borderRadius={5}
          alt="image"
          style={{ marginTop: 20 }}
        />
      </View>
    );
  };

  return (
    <>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View
          style={{ flexDirection: "row" }}
          paddingLeft={10}
          paddingRight={20}
        >
          {Categories.map((item, index) => (
            <Button
              height={50}
              key={index}
              alignItems="center"
              padding={15}
              borderRadius={100}
              $active-bgColor={colors.primary}
              backgroundColor={colors.border}
              style={{ marginHorizontal: 5 }}
            >
              <Text color={colors.text}>{item}</Text>
            </Button>
          ))}
        </View>
      </ScrollView>

      {/* Carousel */}
      <Carousel
        data={Images}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width}
        loop={true}
        autoplay={true}
        inactiveSlideScale={0.5}
      />
    </>
  );
};

export default Category;
