import { DefaultTheme } from "@react-navigation/native";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#345AFA",
    text: "#fff",
    border: "#24272D",
    background: "#080E1E",
  },
};

export default MyTheme;
