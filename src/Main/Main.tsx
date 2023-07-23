import { SafeAreaView, Platform } from "react-native";

import { Home } from "../Screens/Home";
import { Chat } from "../Screens/Chat";

export const Main = (): JSX.Element => {

    return (
        <SafeAreaView
            style={{ flex: 1, marginBottom : Platform.OS ==="ios" ? 30 : 0 }}
        >
            {/* <Home /> */}
            <Chat />
        </SafeAreaView>

    );
};