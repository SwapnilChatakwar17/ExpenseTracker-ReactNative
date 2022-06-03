// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RecentExpense from "../screen/recentExpense";
import AllExpense from "../screen/allExpense";
import Color from "../constants/colors";
import { Ionicons} from "@expo/vector-icons";

// const Tabs = createMaterialBottomTabNavigator();
const Tabs = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tabs.Navigator initialRouteName="Recent" screenOptions={{
      // tabBarShowLabel: false,
      tabBarLabelPosition: 'beside-icon',
      tabBarActiveTintColor: Color.secondary300,
      tabBarInactiveTintColor: Color.accent400,
      tabBarActiveBackgroundColor: Color.primary400,
      tabBarInactiveBackgroundColor: Color.secondary200,
    }}>
      <Tabs.Screen name="Recent" component={RecentExpense} options={{
        tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
      }}/>
      <Tabs.Screen name="All" component={AllExpense}  options={{
        tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
      }}/>
    </Tabs.Navigator>
  );
};

export default TabNavigator;
