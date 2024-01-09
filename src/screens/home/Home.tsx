import { View, ScrollView } from "@gluestack-ui/themed";
import React from "react";
import Profile from "./components/Profile";
import Search from "./components/Search";
import Category from "./components/Category";
import TopPlace from "./components/TopPlace";
import Popular from "./components/Popular";
import Others from "./components/Others";

const Home = () => {
  return (
    <View flex={1} alignItems="center" width={"100%"}>
      <View width={"100%"} marginTop={50} paddingHorizontal={20}>
        <Profile />
      </View>
      <ScrollView>
        <View width={"100%"} marginTop={15} paddingHorizontal={10}>
          <Search />
        </View>
        <View width={"100%"} marginTop={15}>
          <Category />
        </View>
        <View width={"100%"} marginTop={15}>
          <TopPlace />
        </View>
        <View width={"100%"} marginTop={15}>
          <Popular />
        </View>
        <View width={"100%"} marginTop={15}>
          <Others />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
