import {
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
  Divider,
  Image,
  VStack,
} from "@gluestack-ui/themed";
import { Heading } from "@gluestack-ui/themed";
import { InputIcon } from "@gluestack-ui/themed";
import { CheckIcon, EyeOffIcon } from "lucide-react-native";
import { EyeIcon } from "lucide-react-native";
import { InputSlot } from "@gluestack-ui/themed";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import {
  View,
  Text,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";
import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { ActivityIndicator } from "react-native";

const Login = ({ navigation }: any) => {
  const { colors } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const handleState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };

  const { user, setUser, handleLogin, any } = useAuth();

  return (
    <View
      paddingVertical={50}
      flex={1}
      backgroundColor={colors.background}
      alignItems="center"
      display="flex"
      justifyContent="space-between"
    >
      <View
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <View>
          <Image
            source={{
              uri: "https://i.ibb.co/Jk0XnMC/man-climbing-on-mountain.png",
            }}
            alt="image"
            accessibilityLabel="icon"
            width={200}
            height={200}
          />
        </View>
        <View alignItems="center">
          <Text
            color={colors.text}
            fontWeight="bold"
            fontSize={"$4xl"}
            padding={10}
          >
            Welcome Back !
          </Text>
          <Text fontSize={"$lg"} paddingHorizontal={50} textAlign="center">
            Stay signed in yout account to make searching easier
          </Text>
        </View>
      </View>
      <View width={"90%"}>
        <FormControl>
          <VStack space="xl">
            <Heading color="$text900" lineHeight="$md">
              Login
            </Heading>
            <VStack space="xs">
              <Text color={colors.text} lineHeight="$xs">
                Email
              </Text>
              <Input
                height={50}
                borderRadius={10}
                alignItems="center"
                borderColor={colors.border}
              >
                <InputField
                  type="text"
                  color={colors.text}
                  placeholder="Enter your email"
                  value={user.email}
                  onChangeText={(text) => setUser({ ...user, email: text })}
                />
              </Input>
            </VStack>
            <VStack space="xs">
              <Text color={colors.text} lineHeight="$xs">
                Password
              </Text>
              <Input
                height={50}
                borderRadius={10}
                alignItems="center"
                borderColor={colors.border}
              >
                <InputField
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  color={colors.text}
                  value={user.password}
                  onChangeText={(text) => setUser({ ...user, password: text })}
                />
                <InputSlot pr="$3" onPress={handleState}>
                  <InputIcon
                    as={showPassword ? EyeIcon : EyeOffIcon}
                    color="$darkBlue500"
                  />
                </InputSlot>
              </Input>
            </VStack>
            <View
              display="flex"
              flexDirection="row"
              width="100%"
              justifyContent="space-between"
            >
              <Checkbox value="keep me signed in">
                <CheckboxIndicator mr="$2">
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <CheckboxLabel>keep me signed in</CheckboxLabel>
              </Checkbox>
              <View>
                <Text color="red">Forgot Password?</Text>
              </View>
            </View>
            <Button
              width="$full"
              onPress={handleLogin}
              backgroundColor={colors.primary}
              height="$12"
              borderRadius="$lg"
            >
              {any ? (
                <ActivityIndicator />
              ) : (
                <ButtonText color="$white">Save</ButtonText>
              )}
            </Button>
          </VStack>
        </FormControl>
      </View>

      <View
        display="flex"
        flexDirection="row"
        width={"100%"}
        justifyContent="center"
        alignItems="center"
      >
        <Divider width={"50%"} bgColor={colors.border} />
        <Text color={colors.border} textAlign="center" width={"40%"}>
          Or continue with
        </Text>
        <Divider width={"50%"} bgColor={colors.border} />
      </View>
      <View display="flex" flexDirection="row" gap="$4">
        <View
          backgroundColor={colors.border}
          padding={15}
          borderRadius={"$full"}
        >
          <EvilIcons name="sc-facebook" size={24} color={colors.text} />
        </View>
        <View
          backgroundColor={colors.border}
          padding={15}
          borderRadius={"$full"}
        >
          <AntDesign name="google" size={20} color={colors.text} />
        </View>
        <View
          backgroundColor={colors.border}
          padding={15}
          borderRadius={"$full"}
        >
          <AntDesign name="twitter" size={20} color={colors.text} />
        </View>
      </View>
      <View>
        <Text>
          <Text color={colors.text}>You don't have an account? </Text>
          <Text color="red">Sign up</Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;
