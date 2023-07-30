import { useRef } from "react";
import { Button, DrawerLayoutAndroid, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Header } from "./Hader";
import { Navigathor } from "../Interface/navigationInterface";
import { ChatList } from "./ChatList";
import { Card } from "./Card";


export const AndroidDrawer = ({ navigation, navigate }: Navigathor): JSX.Element => {

    const drawer = useRef<DrawerLayoutAndroid>(null);

    const navigationView = () => {

        return (
            <View>
                <View
                    style={styles.header}
                >
                    <Button
                        title="Close"
                        onPress={() => drawer.current?.closeDrawer()}
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

                <View>
                    <View style={{ marginLeft: 10 }}>
                        <Text>this</Text>
                    </View>
                </View>
            </View>

        )
    }



    return (
        <DrawerLayoutAndroid
            ref={drawer}
            drawerWidth={300}
            drawerPosition={'left'}
            renderNavigationView={navigationView}>
            <View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.header}>
                        <View style={styles.settingButton}>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() => drawer.current?.openDrawer()}
                            >
                                <Image
                                    source={require('../public/setting-dark.png')}
                                    style={{
                                        height: 20,
                                        width: 20,
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                        {/* <TouchableOpacity>
                                <Card
                                    avatar={require('../public/avatar.png')}
                                    imageStyle={{ width: 40, height: 40 }}
                                    avatarContainer={{ height: 50, width: 50 }}
                                    isActive={true}

                                />
                            </TouchableOpacity> */}
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
        </DrawerLayoutAndroid>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    navigationContainer: {
        backgroundColor: '#ecf0f1',

    },
    paragraph: {
        padding: 16,
        fontSize: 15,
        textAlign: 'center',
    },
    header: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        height: 60,
    },
    settingButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 25,
        width: 25,
        borderRadius: 100,
        backgroundColor: '#D1D7DC',
        marginVertical: 5
    }
});