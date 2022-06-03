import React from "react";
import {Text, View, StyleSheet, TouchableOpacity, Dimensions} from "react-native";
import { dateFormat } from "../util/dateFormat";

// import MyStyle from "../constants/defaultStyles";
import Colors from "../constants/colors";

const ExpenseItem = ({expenseItem, onTap}) => {
    // console.log(props.expItem);
    const formattedDate = dateFormat(expenseItem.date);
    return (
        <TouchableOpacity onPress={onTap}>
            <View style={styles.card}>
                <View style={styles.detailContainer}>
                    <View>
                        <Text style={styles.detailTitleTxt}>{expenseItem.title}</Text>
                    </View>
                    <View>
                        <Text style={styles.detailDateTxt}>{formattedDate}</Text>
                    </View>
                </View>
                <View style={styles.amountContainer}>
                    <View style={styles.amount}><Text style={styles.amountTxt}>{expenseItem.amount}</Text></View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: Colors.accent400,
        backgroundColor: Colors.primary200,
        width: Dimensions.get('window').width*0.95,
        margin: 10,
        paddingHorizontal: 5,
        paddingVertical: 5,
    },
    detailContainer: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '100%',
        padding: 3,
        paddingLeft: 10,
    },
    detailTitleTxt: {
        color: Colors.accent400,
        fontSize: 14,
        fontWeight: 'bold',
    },
    detailDateTxt: {
        color: Colors.accent400,
        fontSize: 12,
    },
    amountContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        width: '100%',
        padding: 3,
    },
    amount: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary400,
        minWidth: 80,
        paddingVertical: 6,
        borderWidth: 1,
        borderColor: Colors.secondary400,
        borderRadius: 15,
    },
    amountTxt: {
        color: Colors.secondary400,
        fontSize: 16,
        fontWeight: 'bold',
    }
});

export default ExpenseItem;
