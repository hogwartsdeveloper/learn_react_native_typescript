import firebase from "firebase";
import { FC, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { ApprovalRender } from "../components";

const Dashboard: FC = () => {
    const [posts, setPosts] = useState<any>(null);

    const fetchPendingPosts = async () => {
        const posts = await firebase.firestore().collection('posts').where('approved', '==', false).get();
        setPosts([...posts.docs])
    }

    const onApprove = (id: string) => {
        alert(`Item of ID ${id} will be approved`)
    }

    const onReject = (id: string) => {
        alert(`Item of ID ${id} will be approved`)
    }

    useEffect(() => {
        fetchPendingPosts();
    }, [])

    return (
        <View style={styles.container}>
            <Text>Dashboard Screen</Text>
            <View style={{height: '50%'}}>
                <FlatList 
                    data={posts} 
                    renderItem={({item}) => <ApprovalRender 
                                                msg={item.data().msg} 
                                                timeStamp={item.data().timeStamp} 
                                                approved={item.data().approved} 
                                                onApprove={() => onApprove(item.id)} 
                                                onReject={() => onReject(item.id)} 
                                            />
                                } 
                />
            </View> 
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