import React, { useEffect, useState } from "react";

const useSplash = ({ navigation }: any) => {
  useEffect(() => {
    if (navigation && typeof navigation.navigate === "function") {
      setTimeout(() => {
        navigation.replace("Through");
      }, 3000);
    }
  }, [navigation]);
};
export default useSplash;
