import { FC, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input } from "../components";

const SignUp: FC = () => {
    const [name, setName] = useState<string | null>(null);
    const [email, setEmail] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);

    return (
        <View style={styles.container}>
            <Text>Sign Up Screen</Text>
            <Input placeholder="Name" onChangeText={(text) => setName(text)} />
            <Input placeholder="Email" onChangeText={(text) => setEmail(text)} />
            <Input placeholder="password" onChangeText={(text) => setPassword(text)} secureTextEntry/>
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

export default SignUp;