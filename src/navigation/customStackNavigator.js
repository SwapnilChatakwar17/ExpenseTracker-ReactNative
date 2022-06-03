import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabNavigator from "./tabNavigator";
import ManageExpense from "../screen/manageExpense";

const Stack = createNativeStackNavigator();

const CustomStackNavigator = () => {
  // console.log("Recent Navigator");
  return (
    <Stack.Navigator
      initialRouteName="TabNavigator"
      screenOptions={{
        headerShown: false,
        presentation: "modal",
      }}
    >
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="Manage" component={ManageExpense} />
    </Stack.Navigator>
  );
};

export default CustomStackNavigator;
