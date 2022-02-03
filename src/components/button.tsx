import { FC } from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View, Text } from "react-native";

const {height, width} = Dimensions.get('screen');

interface Props {
    title: string;
    onPress: () => void;
}

const Button: FC<Props> = ({title, onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginVertical: 10
    },
    text: {
        color: '#fff'
    }
})

export default Button;