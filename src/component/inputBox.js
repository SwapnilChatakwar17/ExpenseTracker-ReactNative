import {View, Text, TextInput, StyleSheet} from 'react-native';

import Colors from "../constants/colors";

const InputBox = props => {
    // console.log("IN input box of ", props.inputLabel);
    return (
        <View>
            <View>
                <Text>{props.inputLabel}</Text>
            </View>
            <View>
                <TextInput {...props.options} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({});

export default InputBox;
