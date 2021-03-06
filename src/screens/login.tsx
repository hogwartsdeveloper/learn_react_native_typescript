import firebase from "firebase";
import { FC, useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Input, Button } from "../components";

const Login: FC = (props) => {
    const [email, setEmail] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);

    const login = async () => {
        if(email && password) {
            const {user} = await firebase.auth().signInWithEmailAndPassword(email, password);
        } else {
            Alert.alert('Missing Fields')
        }
    }

    return (
        <View style={styles.container}>
            <Text>Login Screen</Text>
            <Input placeholder="Email" onChangeText={(text) => setEmail(text)} />
            <Input placeholder="password" onChangeText={(text) => setPassword(text)} secureTextEntry/>
            <Button title="Login" onPress={login}/>
            <View style={styles.loginText}>
                <Text style={{marginHorizontal: 5}}>Already Have an Account?</Text>
                <TouchableOpacity 
                    style={{marginHorizontal: 5}}
                    onPress={() => props.navigation.navigate('signUp')}>
                    <Text style={{color: 'rgba(81, 135, 200, 1)'}}>Sign Up Here</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginText: {
        flexDirection: 'row',
        marginVertical: 20
    }
})

export default Login;