import {
    Platform
} from "react-native";
import { Navigathor } from "../Interface/navigationInterface";
import { AndroidDrawer } from "../Components/AndroidDrawer";
import { IOSDrawer } from "../Components/IOSDrawer";





export const Home = ({ navigate, navigation }: Navigathor): JSX.Element => {

    if (Platform.OS === 'ios') {
        return (
            <>
                <IOSDrawer
                    navigation={navigation}
                    navigate={navigate}
                />
            </>
        )
    }
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

