import { FC } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const {height, width} = Dimensions.get('screen');

interface Props {
    placeholder: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
}

const Input: FC<Props> = ({placeholder, onChangeText, secureTextEntry}) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder} 
                onChangeText={onChangeText} 
                secureTextEntry={secureTextEntry || false} 
                style={styles.input}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width / 1.1,
        alignSelf: 'center',
        backgroundColor: '#e3e3e3',
        borderRadius: 5,
        marginVertical: 10
    },
    input: {
        padding: 15
    }
})

export default Input;