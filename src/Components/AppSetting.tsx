import { Image, Platform, Text, View } from "react-native";
import { Button } from "./Button";
import { Divider } from "./Divider";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContex";

export const AppSetting = (): JSX.Element => {


    const {
        theme,
        setDarkTheme,
        setLightTheme,
        isActive,
        setActiveState
    } = useContext(ThemeContext)

    const changeActiveState = () => {
        if (!isActive) {
            setActiveState(true)
        } else {
            setActiveState(false)
        }
    }

    return (
        <View
            style={{ flex: 1 }}
        >

            <View
                style={{
                    paddingVertical: 10,
                    marginHorizontal: 10
                }}
            >
                <Text
                    style={{ color: theme.text }}
                > Chage Status </Text>
                <Button
                    action={changeActiveState}
                    buttonContent={
                        <Image
                            source={require('../public/setting/state.png')}
                            style={{ height: 30, width: 30 }}
                        />
                    }
                />
                <Divider />
                <Text
                    style={{ color: theme.text }}
                > Change Theme </Text>
                <Button
                    action={setLightTheme}
                    // buttonStyle={{backgroundColor:'red', width: 50, height : 50}}
                    buttonContent={
                        <Image
                            source={require('../public/setting/sun.png')}
                            style={{ height: 30, width: 30 }}
                        />
                    }
                />
                <Button

                    action={setDarkTheme}
                    // buttonStyle={{backgroundColor:'red', width: 50, height : 50}}
                    buttonContent={
                        <Image
                            source={require('../public/setting/moon.png')}
                            style={{ height: 30, width: 30 }}
                        />
                    }
                />
                <Divider />
                <Text
                    style={{ color: theme.text }}
                > Change Username </Text>
                <Button
                    action={() => console.log('change username')}
                    buttonContent={
                        <Image
                            source={require('../public/setting/me.png')}
                            style={{ height: 30, width: 30 }}
                        />
                    }
                />
            </View>
            {/* <Divider hairLine /> */}
            <View
                style={{
                    position: 'absolute',
                    bottom: Platform.OS === 'ios' ? 70 : 40,
                    right: 20

                }}
            >

                <Button
                    action={() => console.log('log out')}
                    buttonStyle={{
                        backgroundColor: theme.btnBackground,
                        borderRadius: 15,
                        height: 30,
                        width: 90,
                    }}

                    buttonContent={
                        // <Image
                        //     source={require('../public/setting/logout.png')}
                        //     style={{ height: 25, width: 25 }}
                        // />
                        <View
                            style={{

                                alignItems: 'center',
                                backgroundColor: theme.primary,
                                borderRadius: 15,
                                width: 80,
                            }}
                        >
                            <Text
                                style={{
                                    color: theme.text,
                                    fontWeight: '600'
                                }}
                            > Log out </Text>
                        </View>
                    }
                />
            </View>
        </View>
    );
};