import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Card } from "./Card";
import { Navigathor } from "../Interface/navigationInterface";
import { Button } from "./Button";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContex";

export const HeaderChat = ({ navigation, goBack }: Navigathor): JSX.Element => {

    const {theme} = useContext(ThemeContext)
    return (

        <View
            style={styles.headerBox}
        >

            <Button
                action={() => {
                    // navigate && navigate(navigation, true, 'home')}
                    goBack && goBack()
                }}
                buttonStyle={{ marginLeft: 10, marginRight: 5, backgroundColor: theme.btnBackground }}
                buttonContent={
                    <Image
                        source={require('../public/back.png')}
                        style={{...styles.imageButton, backgroundColor: theme.primary}}
                    />
                }
            />
            <Card
                cardStyle={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}
                userComponent={
                    <View>
                        <Text style={{...styles.cardText, color : theme.text}}> {navigation.params?.name} {navigation.params?.last} </Text>
                    </View>
                }
                avatar={navigation.params?.avatar || require('../public/avatar.png')}
                isActive={navigation.params?.isActive || false}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    headerBox: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    backButton: {
        marginLeft: 5,
        marginRight: 5,
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        borderRadius: 100
    },
    imageButton: {
        height: 30,
        width: 30,
        backgroundColor: '#fff',
        borderRadius: 100
    },
    cardText: {
        color: '#000',
        fontWeight: '600',
        fontSize: 11,
        marginLeft: 10,
    }
});