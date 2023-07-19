import { ScrollView, StyleSheet, TextInput, View, TouchableOpacity, Text } from "react-native";
import { Card, CardProps } from "./Card";


const userList: CardProps[] = [
    { name: 'Sofia', last: 'Lina', avatar: require('../public/avatar.png'), isActive: true, },
    { name: 'Sonia', last: 'Mejia', avatar: require('../public/avatar.png'), isActive: true },
    { name: 'Cristina', last: 'Munoz', avatar: require('../public/avatar.png'), isActive: false },
    { name: 'Jose', last: 'Mejia', avatar: require('../public/avatar.png'), isActive: false },
    { name: 'Reynaldo', last: 'Mejia', avatar: require('../public/avatar.png'), isActive: false },
    { name: 'Maria', last: 'Mejia', avatar: require('../public/avatar.png'), isActive: true },
    { name: 'Reynaldo', last: 'Mejia', avatar: require('../public/avatar.png'), isActive: true },
    { name: 'Maria', last: 'Mejia', avatar: require('../public/avatar.png'), isActive: true },
    { name: 'Maria', last: 'Mejia', avatar: require('../public/avatar.png'), isActive: true },
    { name: 'Reynaldo', last: 'Mejia', avatar: require('../public/avatar.png'), isActive: true },
    { name: 'Maria', last: 'Mejia', avatar: require('../public/avatar.png'), isActive: true },
    { name: 'Maria', last: 'Mejia', avatar: require('../public/avatar.png'), isActive: true },
    { name: 'Reynaldo', last: 'Mejia', avatar: require('../public/avatar.png'), isActive: true },
    { name: 'Maria', last: 'Mejia', avatar: require('../public/avatar.png'), isActive: true },
]


export const Header = (): JSX.Element => {

    const list = userList.map((user, index) => {
        return (
            <TouchableOpacity
                key={index}
                style={{
                    marginHorizontal: 2,
                    marginTop: 2,
                    justifyContent: 'flex-start',
                }}
            >
                <Card
                    // name={user.name}
                    // last={user.last}
                    userComponent={
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.text}>{user.name}</Text>
                            <Text style={styles.text}>{user.last}</Text>
                        </View>
                    }
                    avatar={user.avatar}
                    isActive={user.isActive}
                    cardStyle={{ flexDirection: 'column' }}
                />
            </TouchableOpacity>
        )
    })

    return (
        <View style={styles.container}>
            <View style={styles.search} >
                <TextInput
                    placeholder="Search"
                />
            </View>
            <View style={styles.userListBox} >
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {list}
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 130,
        justifyContent: 'center',
    },
    search: {
        backgroundColor: '#D1D7DC',
        borderRadius: 100,
        height: 40,
        justifyContent: 'center',
        paddingLeft: 10,
        marginHorizontal: 10,
    },
    userListBox: {
        // backgroundColor:'red',
        // paddingLeft: 10,
        height: 83,
        marginTop: 4,

    },
    text: {
        textAlign: 'center',

        color: '#000',
        fontWeight: '600',
        fontSize: 9,
        marginLeft: 10


    }
});