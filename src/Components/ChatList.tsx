import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Card } from "./Card";
import {  userList } from "../Interface/chatInterface";
import { Navigathor } from "../Interface/navigationInterface";


export const ChatList = ({ navigation, navigate }:Navigathor): JSX.Element => {
    const chatList = userList.map((user, index) => {
        return (
            <TouchableOpacity
                key={index}
                style={{
                    // marginHorizontal: 2,
                    marginTop: 5
                }}
                onPress={() =>  navigate && navigate(navigation, false, 'chat', user)}
            >
                <Card
                    userComponent={
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={styles.text}>{user.name} {user.last}</Text>
                            <Text style={{
                                ...styles.text,
                                fontSize: 13,
                                fontWeight: '500'
                            }}> {user.lastMsg}</Text>
                        </View>
                    }
                    avatar={user.avatar}
                    isActive={user.isActive}
                    cardStyle={{ flexDirection: 'row' }}
                />
            </TouchableOpacity>
        )
    })
    return (
        <View
            style={{ marginHorizontal: 10, marginTop: 2, marginBottom: 4 }}
        >
            {chatList}
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        color: '#000',
        fontWeight: '600',
        fontSize: 11,
        marginLeft: 10
    }
});