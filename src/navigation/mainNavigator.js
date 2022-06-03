import { NavigationContainer } from "@react-navigation/native";

import CustomStackNavigator from "./customStackNavigator";
import ExpenseContextProvider from "../store/expenseContext";

const MainNavigator = () => {
//   console.log("Main Navigator");
  return (
    <NavigationContainer>
      <ExpenseContextProvider>
        <CustomStackNavigator />
      </ExpenseContextProvider>
    </NavigationContainer>
  );
};

export default MainNavigator;
