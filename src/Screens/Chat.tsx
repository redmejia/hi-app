import {
    KeyboardAvoidingView,
    Keyboard,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View,
    useWindowDimensions,
} from "react-native";
import { HeaderChat } from "../Components/HeaderChat";
import { useState } from "react";


export const Chat = (): JSX.Element => {

    const [chat, setChat] = useState<string>("")


    const { height } = useWindowDimensions()

    return (
        <View style={{ flex: 1 }} >

            <View
                style={{ paddingVertical: 5, borderBottomWidth: 1 }}
            >
                <HeaderChat />
                {/* <Text>{height / height + 55}  </Text> */}
            </View>

            <ScrollView
                contentContainerStyle={{ paddingBottom: Platform.OS === 'android' ? 5 : 80 }}
                showsVerticalScrollIndicator={false}
                style={{ marginTop: 5, marginHorizontal: 10 }}

            >
                {
                    chat.length !== 0 &&
                    <View
                        style={{
                            backgroundColor: 'rgba(59, 127, 204, 0.10)',
                            borderRadius: 100,
                            height: 30,
                            justifyContent: 'center',
                            paddingLeft: 10
                        }}
                    >
                        <Text>{chat}</Text>
                    </View>
                }
            </ScrollView>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                // style={styles.container}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                    <View
                        style={{
                            width: '100%',
                            padding: 10,
                            bottom: Platform.OS === 'ios' ? 60 : 0,
                            backgroundColor: '#fff'
                        }}
                    >
                        <TextInput
                            placeholder="Say Hi"
                            onChangeText={newText => setChat(newText)}
                            style={styles.textInput}
                        />

                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </View >

    );
};

const styles = StyleSheet.create({

    container: {
        // flex: 1,
        // backgroundColor: 'blue',
        // marginBottom: Platform.OS === "ios" ? 20 : 0,
        // justifyContent: 'center'
    },
    inner: {
        // padding: 20,
        // marginVertical:0,
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'green'

    },

  
    textInput: {
        backgroundColor: '#D1D7DC',
        borderRadius: 100,
        height: 40,
        justifyContent: 'center',
        paddingLeft: 10,
    },
    btnContainer: {
        backgroundColor: 'white',
        marginTop: 10,
    },
});