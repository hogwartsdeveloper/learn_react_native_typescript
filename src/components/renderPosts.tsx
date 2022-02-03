import { FC } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Button } from ".";

const {width, height} = Dimensions.get('screen');

interface Props {
    msg: string;
    approved: string;
    timeStamp: number;
}

const formatTime = (timeStamp: number) : any => {
    const calculatedTime = Date.now() - timeStamp;
    if(calculatedTime > 1000) return `${calculatedTime / 1000} s`;
    if((calculatedTime / 1000) > 60) return `${(calculatedTime / 1000) / 60 } min`;
    if(((calculatedTime / 1000) / 60) > 60) return `${((calculatedTime / 1000) / 60) / 60} hr`
    else `${(((calculatedTime / 1000) / 60) / 60) / 24} d`
}

const RenderPendingPost: FC<Props> = ({msg, timeStamp, approved}) => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{width: '60%'}}>{msg}</Text>
                <Text>{formatTime(timeStamp)}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width / 1.1,
        alignSelf: 'center',
        marginVertical: 10,
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowOffset: {
            width: 3,
            height: 3
        },
        shadowColor: '#ccc',

    }
})

export default RenderPendingPost;