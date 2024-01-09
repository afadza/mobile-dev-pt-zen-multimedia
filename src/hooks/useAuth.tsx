import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function useAuth() {
  const navigation = useNavigation<any>();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [any, setAny] = useState(false);

  function handleLogin() {
    setAny(true);
    fetch("https://jsonplaceholder.org/users")
      .then((res) => res.json())
      .then((data) => {
        const existedUser = data.find(
          (item: { email: string }) => item.email === user.email
        );
        setAny(false);
        if (!existedUser) {
          alert("Email tidak di temukan");
        } else if (existedUser.login.password !== user.password) {
          alert("Password salah");
        } else {
          navigation.replace("Main");
        }
      });
  }

  return { user, setUser, handleLogin, any };
}
