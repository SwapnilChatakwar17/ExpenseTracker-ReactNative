import React, { useState, useLayoutEffect, useContext } from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  Dimensions,
  FlatList,
} from "react-native";

import MyStyle from "../constants/defaultStyles";
import Colors from "../constants/colors";
import ExpenseItem from "../component/expenseItem";
import { ExpenseContext } from "../store/expenseContext";
import HeaderButton from "../component/headerButton";

const AllExpense = (props) => {
  const ExpenseCtx = useContext(ExpenseContext);
  const expenses = ExpenseCtx.expense;
  const [totalExpense, setTotalExpense] = useState("0");
  // console.log("In Recent Expense");

  useLayoutEffect(() => {
    setTotalExpense(() => {
      let sum = 0;
      sum = expenses.reduce((temp, exp) => temp + Number(exp.amount), 0);
      return sum.toString();
    });
  }, [ExpenseCtx]);

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTintColor: Colors.primary400,
      headerTitleAlign: "center",
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 24,
      },
      headerStyle: {
        backgroundColor: Colors.secondary200,
      },
      headerRight: () => (
        <HeaderButton
          title="Add"
          iconName="add-circle-sharp"
          color={Colors.accent400}
          // onPress={() => {}}
          onPress={() => props.navigation.navigate("Manage")}
        />
      ),
    });
  }, [props.navigation]);

  // console.log("===================Expenses===================", expenses);

  const expenseHandler = (itemData) => {
    return (
      <ExpenseItem
        onTap={() =>
          props.navigation.push("Manage", { expItemId: itemData.item.id })
        }
        // onTap={() => {}}
        expenseItem={itemData.item}
      />
    );
  };

  return (
    <View style={MyStyle.screen}>
      <View style={styles.card}>
        <View style={styles.detailContainer}>
          <Text style={styles.detailTitleTxt}>All Expense</Text>
        </View>
        <View style={styles.amountContainer}>
          <View style={styles.amount}>
            <Text style={styles.amountTxt}>{totalExpense}</Text>
          </View>
        </View>
      </View>
      <View style={styles.list}>
        <FlatList data={expenses} renderItem={expenseHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 3,
    borderRadius: 10,
    borderColor: Colors.secondary400,
    backgroundColor: Colors.primary300,
    width: Dimensions.get("window").width * 0.95,
    maxHeight: Dimensions.get("window").width * 0.2,
    margin: 10,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  list: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  detailContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
    padding: 3,
    paddingLeft: 10,
  },
  detailTitleTxt: {
    color: Colors.accent400,
    fontSize: 17,
    fontWeight: "bold",
  },
  amountContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    width: "100%",
    padding: 3,
  },
  amount: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.accent400,
    minWidth: 100,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: Colors.secondary400,
    borderRadius: 20,
  },
  amountTxt: {
    color: Colors.secondary400,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default AllExpense;
