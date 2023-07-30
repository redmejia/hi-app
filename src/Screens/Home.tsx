import {
    Button,
    DrawerLayoutAndroid,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { Header } from "../Components/Hader";
import { ChatList } from "../Components/ChatList";
import { Navigathor } from "../Interface/navigationInterface";
import { useRef } from "react";
import { AndroidDrawer } from "../Components/AndroidDrawer";





export const Home = ({ navigate, navigation }: Navigathor): JSX.Element => {

    return (
        <>





            <AndroidDrawer
                navigation={navigation}
                navigate={navigate}
            />
            {/* <ScrollView
                showsVerticalScrollIndicator={false}
            > */}
                {/* <Header
                    navigation={navigation}
                    navigate={navigate}
                /> */}
                {/* <ChatList
                    navigation={navigation}
                    navigate={navigate}
                /> */}
            {/* </ScrollView> */}

        </>
    );
};

