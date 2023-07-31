import { useRef } from "react";
import { Animated, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";
import { Drawer } from "./Drawer";
import { Navigathor } from "../Interface/navigationInterface";
import { Header } from "./Hader";
import { ChatList } from "./ChatList";
import { Button } from "./Button";
import { Card } from "./Card";
import { AppSetting } from "./AppSetting";


interface Props {
    action: () => void;
}

const NavigationView = ({ action }: Props) => {

    return (
        <View
            style={{ flex: 1 }}
        >
            <View
                style={styles.header}
            >
                <Button
                    action={action}
                    buttonActiveOpacity={0.10}
                    buttonStyle={{ marginTop: 10, backgroundColor: '#33A3FF' }}
                    buttonContent={
                        <Image
                            source={require('../public/back.png')}
                            style={styles.imageButton}
                        />
                    }
                />
                <TouchableOpacity>
                    <Card
                        avatar={require('../public/avatar.png')}
                        imageStyle={{ width: 40, height: 40 }}
                        avatarContainer={{ height: 50, width: 50 }}
                        isActive={true}
                    />
                </TouchableOpacity>
            </View>
            <AppSetting />
        </View>
    )
}


export const IOSDrawer = ({ navigation, navigate }: Navigathor): JSX.Element => {


    const slideToLeft = useRef(new Animated.Value(0)).current;

    const open = () => {
        Animated.timing(slideToLeft, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true,
        }).start();
    };

    const close = () => {
        Animated.timing(slideToLeft, {
            toValue: 0,
            duration: 600,
            useNativeDriver: true,
        }).start();
    };


    return (
        <Drawer
            drawerWidth={700}
            navigationChildren={<NavigationView action={close} />}
            slideLeftValue={slideToLeft}
        >

            <View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.header}>
                        <Button
                            action={open}
                            buttonStyle={{
                                backgroundColor: '#D1D7DC',
                                height: 26,
                                width: 26,
                            }}
                            buttonContent={
                                <Image
                                    source={require('../public/setting-dark.png')}
                                    style={{
                                        height: 20,
                                        width: 20,
                                    }}
                                />
                            }
                        />
                    </View>
                    <Header
                        navigation={navigation}
                        navigate={navigate}
                    />
                    <ChatList
                        navigation={navigation}
                        navigate={navigate}
                    />
                </ScrollView>
            </View>
        </Drawer>
    )
};

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        height: 40, // or change to 60 for display user avatar on right
        marginBottom: 5,
    },
    imageButton: {
        height: 30,
        width: 30,
        backgroundColor: '#fff',
        borderRadius: 100
    }
});

