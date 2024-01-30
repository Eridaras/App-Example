import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Profile from "./components/home/Profile";
import ListComponent from "./components/list/List";
import User from "./screen/User";
import Chat from "./screen/Chat";
import Pdf from "./screen/Pdf";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  const [color, setColor] = useState("red");
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Profile}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name={"Pokemon"}
        component={ListComponent}
        options={{
          tabBarLabel: "Pokemon",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name={"pokemon-go"}
              color={color}
              size={35}
            />
          ),
        }}
      />
      <Tab.Screen
        name={"Trainer"}
        component={User}
        options={{
          tabBarLabel: "Trainer",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name={"account"} color={color} size={35} />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
};

export default Navigation;
