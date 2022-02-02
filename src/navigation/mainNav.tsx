import { FC, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native"
import AppStack from "./appStack";
import AuthStack from "./authStack";
import firebase from "firebase";

const MainNav: FC = () => {
    const [user, setUser] = useState<any>(null);

    const bootstrap = () => {
        firebase.auth().onAuthStateChanged(_user => {
            if(_user) {
                setUser(_user)
            }
        })
    }

    useEffect(() => {
        bootstrap()
    }, [])

    return (
        <NavigationContainer>
            {user !== null ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    )
}

export default MainNav;