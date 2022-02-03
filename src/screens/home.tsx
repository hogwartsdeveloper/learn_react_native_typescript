import firebase from "firebase";
import { FC, useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Button, Input, PostRender } from "../components";

const Home: FC = (props) => {
    const [msg, setMsg] = useState<string | null>(null);
    const [user, setUser] = useState<any>(null);
    const [posts, setPosts] = useState<any>([]);

    const signOut = () => {
        firebase.auth().signOut();
    }

    const fetchCurrentUser = async () => {
        const uid = firebase.auth().currentUser?.uid;
        const user = await firebase.firestore().collection('users').doc(uid).get();
        setUser({id: user.id, ...user.data()})
    }

    const fetchPendingPosts = async () => {
        firebase.firestore().collection('posts').where('approved', '==', true).onSnapshot(querySnapshot => {
            const documents = querySnapshot.docs;
            setPosts(documents)
        })
    }

    useEffect(() => {
        fetchCurrentUser();
        fetchPendingPosts()
    }, [])

    const post = async () => {
        if(msg) {
            const data = {
                msg,
                timeStamp: Date.now(),
                approved: false
            }
            try {
                await firebase.firestore().collection('posts').add(data);
            } catch(e) {
                console.log(e)
            }
            
        } else {
            Alert.alert('Missing Fields')
        }
    }

    return (
        <View style={styles.container}>
            <View style={{flex: 0.5}}>
                {posts.length > 0
                    ?
                    (<FlatList data={posts} renderItem={({item}) => <PostRender msg={item.data().msg} timeStamp={item.data().timeStamp} approved={item.data().approved}/>} />)
                    :
                    (<View style={{flex: 1, justifyContent: 'center'}}>
                        <Text>Nothing To Display</Text>
                    </View>)
                }
            </View>
            
            <Text>Home Screen</Text>
            <Button title="Sign Out" onPress={signOut} />
            <View>
                <Input placeholder="Write Something Here" onChangeText={(text) => setMsg(text)} />
                <Button title="Post" onPress={post} />
            </View>
            {user ? user.isAdmin ? (
                <View>
                    <Button title="Dashboard" onPress={() => props.navigation.navigate('dashboard')} />
                </View>
            ) : null : null}
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