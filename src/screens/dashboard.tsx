import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

const Dashboard: FC = () => {
    return (
        <View style={styles.container}>
            <Text>Dashboard Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Dashboard;