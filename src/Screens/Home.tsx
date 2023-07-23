import { ScrollView } from "react-native";
import { Header } from "../Components/Hader";
import { ChatList } from "../Components/ChatList";


export const Home = (): JSX.Element => {


    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            <Header />
            <ChatList />
        </ScrollView>
    );
};

