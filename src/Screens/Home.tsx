import { ScrollView } from "react-native";
import { Header } from "../Components/Hader";
import { ChatList } from "../Components/ChatList";
import { Navigathor } from "../Interface/navigationInterface";



export const Home = ({navigate, navigation}:Navigathor): JSX.Element => {

    

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            <Header
                navigation={navigation}
                navigate={navigate}
            />
            <ChatList 
                navigation={navigation}
                navigate={navigate}
            />
        </ScrollView>
    );
};

