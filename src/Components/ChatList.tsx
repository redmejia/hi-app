import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Card, CardProps } from "./Card";

const userList: CardProps[] = [
    { name: 'Sofia', last: 'Lina', avatar: require('../public/avatar.png'), isActive: false, lastMsg: 'hola' },
    { name: 'Sonia', last: 'Mejia', avatar: require('../public/avatar.png'), isActive: true },
    { name: 'Cristina', last: 'Munoz', avatar: require('../public/avatar.png'), isActive: true, lastMsg:'this is a test, bye' },
    { name: 'Jose', last: 'Mejia', avatar: require('../public/avatar.png'), isActive: false },
    { name: 'Reynaldo', last: 'Mejia', avatar: require('../public/avatar.png'), isActive: false },
    { name: 'Maria', last: 'Mejia', avatar: require('../public/avatar.png'), isActive: true },
    { name: 'Reynaldo', last: 'Mejia', avatar: require('../public/avatar.png'), isActive: true },
    { name: 'Maria', last: 'Mejia', avatar: require('../public/avatar.png'), isActive: true },
    { name: 'Reynaldo', last: 'Mejia', avatar: require('../public/avatar.png'), isActive: false },
    { name: 'Maria', last: 'Mejia', avatar: require('../public/avatar.png'), isActive: true },
    { name: 'Reynaldo', last: 'Mejia', avatar: require('../public/avatar.png'), isActive: true },
    { name: 'Maria', last: 'Mejia', avatar: require('../public/avatar.png'), isActive: true },
]

export const ChatList = (): JSX.Element => {
    const chatList = userList.map((user, index) => {
        return (
            <TouchableOpacity
                key={index}
                style={{
                    // marginHorizontal: 2,
                    marginTop: 5
                }}
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
            style={{ marginHorizontal: 10, marginTop: 6 }}
        >
            {chatList}
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        color: '#000',
        fontWeight:'600',
        fontSize: 11,
        marginLeft: 10
    }
});