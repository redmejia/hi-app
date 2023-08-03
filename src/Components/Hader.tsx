import { ScrollView, StyleSheet, TextInput, View, TouchableOpacity, Text } from "react-native";
import { Card } from "./Card";
import { userList } from "../Interface/chatInterface";
import { Navigathor } from "../Interface/navigationInterface";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContex";



export const Header = ({ navigation, navigate }: Navigathor): JSX.Element => {

    const { theme } = useContext(ThemeContext)

    const list = userList.map((user, index) => {
        return (
            <TouchableOpacity
                key={index}
                style={{
                    marginHorizontal: 2,
                    marginTop: 2,
                    justifyContent: 'flex-start',
                }}
                onPress={() => navigate && navigate(navigation, false, 'chat', user)}
            >
                <Card
                    // name={user.name}
                    // last={user.last}
                    userComponent={
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{...styles.text, color: theme.text}}>{user.name}</Text>
                            <Text style={{...styles.text, color: theme.text}}>{user.last}</Text>
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
            <View style={{...styles.search, backgroundColor: theme.lightDark}} >
                <TextInput
                    placeholder="Search"
                    placeholderTextColor={theme.text}
                    style={{color: theme.text, fontWeight: "bold"}}
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