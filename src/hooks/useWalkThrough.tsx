import React, { useState, ReactNode } from "react";
import First from "../screens/walkthrough/components/First";
import Second from "../screens/walkthrough/components/Second";
import Third from "../screens/walkthrough/components/Third";

const useWalkThrough = ({ navigation }: any) => {
  const [activeComponent, setActiveComponent] = useState(1);

  const renderComponent = (): ReactNode => {
    switch (activeComponent) {
      case 1:
        return <First />;
      case 2:
        return <Second />;
      case 3:
        return <Third />;
      default:
        return null;
    }
  };

  const handleButtonClick = () => {
    if (activeComponent < 3) {
      setActiveComponent((prev) => prev + 1);
    } else {
      navigation.navigate("Login");
    }
  };

  return {
    renderComponent,
    handleButtonClick,
    activeComponent,
  };
};

export default useWalkThrough;
