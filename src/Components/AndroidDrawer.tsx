import { useContext, useRef } from "react";
import {
    DrawerLayoutAndroid,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { Header } from "./Hader";
import { Navigathor } from "../Interface/navigationInterface";
import { ChatList } from "./ChatList";
import { Card } from "./Card";
import { Button } from "../Components/Button";
import { AppSetting } from "./AppSetting";
import { ThemeContext } from "../Context/ThemeContex";


export const AndroidDrawer = ({ navigation, navigate }: Navigathor): JSX.Element => {

    const drawer = useRef<DrawerLayoutAndroid>(null);

    const {theme, isActive} = useContext(ThemeContext);

    const navigationView = () => {

        return (
            <View
                style={{ flex: 1, backgroundColor: theme.background }}
            >
                <View
                    style={styles.header}
                >
                    <Button
                        action={() => drawer.current?.closeDrawer()}
                        buttonStyle={{ marginTop: 10, backgroundColor: theme.btnBackground }}
                        buttonContent={
                            <Image
                                source={require('../public/back.png')}
                                style={{...styles.imageButton, backgroundColor: theme.primary, borderRadius: 100 }}
                            />
                        }
                    />
                    <TouchableOpacity>
                        <Card
                            avatar={require('../public/avatar.png')}
                            imageStyle={{ width: 40, height: 40 }}
                            avatarContainer={{ height: 50, width: 50 }}
                            isActive={isActive}
                        />
                    </TouchableOpacity>
                </View>
                <AppSetting />
            </View>
        )
    }



    return (
        <DrawerLayoutAndroid
            ref={drawer}
            drawerWidth={300}
            drawerPosition={'left'}
            renderNavigationView={navigationView}>
            <View 
                style={{backgroundColor: theme.background}}
            >
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.header}>
                        <Button
                            action={() => drawer.current?.openDrawer()}
                            buttonStyle={{
                                backgroundColor: theme.primary,
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
        height: 40, // or change to 60 for display user avatar on right
        marginBottom: 5,
    },
    imageButton: {
        height: 30,
        width: 30,
        // backgroundColor: '',
        // borderRadius: 100
    }
});