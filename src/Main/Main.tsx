import { SafeAreaView, Platform, Text, View, Button } from "react-native";

import { Home } from "../Screens/Home";
import { Chat } from "../Screens/Chat";
import { useContext, useState } from "react";
import { Navigathor, Navigation } from "../Interface/navigationInterface";
import { User } from "../Interface/chatInterface";
import { ThemeContext } from "../Context/ThemeContex";


export const Main = (): JSX.Element => {

    const {theme} = useContext(ThemeContext)

    const [navigation, setNavigation] = useState<Navigathor>({
        navigation: {
            root: true,
            screen: 'home',
        }
    });



    const navigate = (navigation: Navigation, root: boolean, screen: string, params?: User) => {

        if (navigation?.screen !== screen) {
            setNavigation({
                navigation: {
                    root: root,
                    screen: screen,
                    params: params,
                }
            })
        }
    }


    const goBack = () => {
        setNavigation({
            navigation: {
                root: true,
                screen: 'home',
            }
        })


    }









    if (navigation.navigation?.screen === 'home') {

        return (
            <SafeAreaView
                style={{ flex: 1, marginBottom: Platform.OS === "ios" ? 0 : 0, backgroundColor: theme.background }} // fix I think  margin not need 
            >
                <Home
                    navigation={navigation.navigation}
                    navigate={navigate}
                />
            </SafeAreaView>
        )
    } else {


        return (
            <SafeAreaView
                style={{ flex: 1, marginBottom: Platform.OS === "ios" ? 0 : 0, backgroundColor: theme.background }} // fix I think margin not need 
            >
                {/* <Home /> */}

                <Chat
                    navigation={navigation.navigation}
                    navigate={navigate}
                    goBack={goBack}
                />



            </SafeAreaView>

        );

    }
};