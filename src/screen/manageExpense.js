import React, { useState, useContext, useLayoutEffect } from "react";
import {
  Text,
  TextInput,
  View,
  Button,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";

// import MyStyle from "../constants/defaultStyles";
import Colors from "../constants/colors";
import { ExpenseContext } from "../store/expenseContext";
import { dateFormat } from "../util/dateFormat";
import IconButton from "../component/iconButton";

const ManageExpense = (props) => {
  const expenseCtx = useContext(ExpenseContext);
  const addExpense = expenseCtx.addExpense;
  const editExpense = expenseCtx.editExpense;
  const deleteExpense = expenseCtx.deleteExpense;
  const expItemId = props.route.params?.expItemId;
  const isEditMode = !!expItemId;
  const editableExpense = expenseCtx.expense.filter(expense => expense.id === expItemId);

  const [state, setState] = useState(isEditMode ? {
    title: editableExpense[0].title.toString(),
    amount: editableExpense[0].amount.toString(),
    date: dateFormat(editableExpense[0].date)
  } : {
      title: "",
      amount: "",
      date: "",
  });
  const [validState, setValidState] = useState([true, true, true]);
  
  const changeHandler = (label, enteredText) => {
    setState((currentState) => {
      return {
        ...currentState,
        [label]: enteredText,
      };
    });
  };

  const expenseHandler = () => {
    const isAmountValid = state.amount > 0 && !(isNaN(state.amount));
    const isDateValid = new Date(state.date).toString() !== "Invalid Date";
    const isTitleValid = state.title.trim().length > 0;

    if(isAmountValid && isDateValid && isTitleValid) {
      if (isEditMode) {
        editExpense(expItemId, state);
      } else {
        addExpense(state);
      }
      props.navigation.goBack();
    } else {
      setValidState([isAmountValid, isDateValid, isTitleValid]);
    }
  };

  const deleteHandler = () => {
    // console.log("In DeleteHandler");
    deleteExpense(expItemId);
    props.navigation.goBack();
  };

  return (
    <View style={styles.screen}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          {isEditMode ? "Edit Your Expense" : "Add New Expense"}
        </Text>
      </View>
      <View style={styles.inputContainer1}>
        <View style={styles.inputSubContainer}>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Amount</Text>
          </View>
          <View style={styles.inputBox}>
            <TextInput
              style={validState[0] ? styles.input : styles.inputErr}
              placeholder="Enter Amount"
              value={state.amount}
              onChangeText={changeHandler.bind(this, "amount")}
              keyboardType="numeric"
            />
          </View>
        </View>
        <View style={styles.inputSubContainer}>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Date</Text>
          </View>
          <View style={styles.inputBox}>
            <TextInput
              style={validState[1] ? styles.input : styles.inputErr}
              placeholder="YYYY-MM-DD"
              value={state.date}
              onChangeText={changeHandler.bind(this, "date")}
              keyboardType="numeric"
            />
          </View>
        </View>
      </View>
      <View style={styles.inputContainer2}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Title</Text>
        </View>
        <View style={styles.inputBox}>
          <TextInput
            style={validState[2] ? styles.input : styles.inputErr}
            placeholder="Enter Title"
            value={state.title}
            onChangeText={changeHandler.bind(this, "title")}
            multiline={true}
          />
        </View>
      </View>
      <View style={styles.iconContainer}>
        <View style={styles.iconContainer1}>
          <View style={styles.iconsH}>
            <IconButton
              name="close-circle-outline"
              color={Colors.disable400}
              backgroundColor={Colors.disable100}
              onTap={() => props.navigation.goBack()}
            />
          </View>
          <View style={styles.iconsH}>
            <IconButton
              name="add-circle-outline"
              color={Colors.accept400}
              backgroundColor={Colors.accept100}
              onTap={expenseHandler}
            />
          </View>
        </View>
        <View style={styles.iconContainer2}>
          {/* {showDeleteButton} */}
          {isEditMode ? <View style={styles.icons}>
            <IconButton
            name="trash-outline"
            color={Colors.danger400}
            backgroundColor={Colors.danger100}
            onTap={deleteHandler}
            />
          </View> : <Text></Text>}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: Colors.primary100,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 15 : 0,
    // borderWidth: 5,
  },
  titleContainer: {
    flex: 0.1,
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.accent400,
    borderColor: Colors.secondary300,
    borderRadius: 15,
    borderWidth: 2,
    marginBottom: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: Colors.primary300,
  },
  inputContainer1: {
    flex: 0.15,
    width: "90%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
    padding: 3,
  },
  inputSubContainer: {
    flex: 1,
    marginHorizontal: 4,
  },
  inputContainer2: {
    flex: 0.35,
    width: "90%",
    justifyContent: "center",
    alignItems: "flex-start",
    marginVertical: 10,
    marginHorizontal: 4,
    padding: 3,
  },
  labelContainer: {
    flex: 0.3,
    marginBottom: 2,
    justifyContent: "center",
    // backgroundColor: Colors.primary200,
    width: "100%",
    borderBottomWidth: 1,
    borderColor: Colors.secondary400,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.accent400,
  },
  inputBox: {
    flex: 0.7,
    justifyContent: "flex-start",
    width: "100%",
  },
  input: {
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: Colors.primary100,
    // borderWidth: 1,
  },
  inputErr: {
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: Colors.danger400,
  },
  iconContainer: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
  },
  iconContainer1: {
    flex: 0.5,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  iconContainer2: {
    flex: 0.5,
    width: "100%",
    margin: 5,
  },
  icons: {
    flex: 1,
    width: "100%",
    borderWidth: 1,
    borderColor: Colors.secondary200,
    borderRadius: 15,
  },
  iconsH: {
    // ...icons, ...styles.icons, these don't work
    flex: 1,
    width: "100%",
    borderWidth: 1,
    borderColor: Colors.secondary200,
    borderRadius: 15,
    marginHorizontal: 2,
  },
});

export default ManageExpense;
