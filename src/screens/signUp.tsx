import { FC, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Input, Button } from "../components";

const SignUp: FC = (props) => {
    const [name, setName] = useState<string | null>(null);
    const [email, setEmail] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);

    return (
        <View style={styles.container}>
            <Text>Sign Up Screen</Text>
            <Input placeholder="Name" onChangeText={(text) => setName(text)} />
            <Input placeholder="Email" onChangeText={(text) => setEmail(text)} />
            <Input placeholder="password" onChangeText={(text) => setPassword(text)} secureTextEntry/>
            <Button title="Sign Up" onPress={() => alert('Presed')}/>
            <View style={styles.loginText}>
                <Text style={{marginHorizontal: 5}}>Already Have an Account?</Text>
                <TouchableOpacity 
                    style={{marginHorizontal: 5}}
                    onPress={() => props.navigation.navigate('login')}>
                    <Text style={{color: 'rgba(81, 135, 200, 1)'}}>Login Here</Text>
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

export default SignUp;