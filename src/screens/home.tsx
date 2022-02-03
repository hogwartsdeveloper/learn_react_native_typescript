import firebase from "firebase";
import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "../components";

const Home: FC = () => {

    const signOut = () => {
        firebase.auth().signOut();
    }

    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button title="Sign Out" onPress={signOut} />
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

export default Home;