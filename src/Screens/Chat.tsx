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
    Image,
} from "react-native";
import { HeaderChat } from "../Components/HeaderChat";
import { useContext, useState } from "react";
import { Navigathor } from "../Interface/navigationInterface";
import { Button } from "../Components/Button";
import { ThemeContext } from "../Context/ThemeContex";




const lenMessage = (message: string): number => {


    if (message.length === 1) {
        return 30
    }
    return message.length + 18

}


export const Chat = ({ navigation, navigate, goBack }: Navigathor): JSX.Element => {




    const [chat, setChat] = useState<string>("")
    const [text, setText] = useState<string>("")
    const [send, setSend] = useState<boolean>(false)


    const { theme } = useContext(ThemeContext)


    const { width } = useWindowDimensions()



    return (
        <View style={{ flex: 1, backgroundColor: theme.background }} >

            <View
                style={{ paddingVertical: 5, borderBottomWidth: 1 }}
            >
                <HeaderChat
                    navigation={navigation}
                    navigate={navigate}
                    goBack={goBack}
                />
                {/* <Text>{height / height + 55}  </Text> */}
            </View>

            <ScrollView
                contentContainerStyle={{ paddingBottom: Platform.OS === 'android' ? 5 : 80 }}
                showsVerticalScrollIndicator={false}
                style={{ marginTop: 5, marginHorizontal: 10 }}

            >


                {
                    navigation.params?.lastMsg && // this will be replace for the chat coversacion
                    (
                        <View
                            style={{
                                ...styles.chatBox,
                                backgroundColor: theme.primary,
                                margin: 10,
                                marginRight: width / 2,
                                height: lenMessage(navigation.params?.lastMsg)
                            }}
                        >
                            <Text style={{ color: theme.text }}>{navigation.params?.lastMsg}</Text>

                        </View>
                    )
                }


                {
                    send &&
                    <View
                        style={{
                            ...styles.chatBox,
                            margin: 10,
                            marginTop: 20,
                            backgroundColor: theme.primary,
                            // alignItems: 'center',
                            marginLeft: width / 2,
                            height: lenMessage(chat)
                        }}
                    >
                        <Text
                            style={{ ...styles.chatText, color: theme.text }}
                        >{chat}</Text>
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
                            padding: 10,
                            bottom: Platform.OS === 'ios' ? 60 : 0,
                            backgroundColor: theme.background,

                        }}
                    >
                        <View
                            style={{
                                backgroundColor: theme.background,
                                flexDirection: 'row',
                            }}

                        >

                            <TextInput
                                placeholder="Say Hi"
                                placeholderTextColor={theme.text}
                                onChangeText={newText => setText(newText)}
                                style={{
                                    ...styles.textInput,
                                    fontWeight: '600',
                                    color: theme.text,
                                    backgroundColor: theme.lightDark
                                }}
                                value={text}
                            />

                            {
                                text.length !== 0 && (
                                    <Button
                                        action={() => {
                                            setSend(true)
                                            setChat(text)
                                            setText("")
                                        }}
                                        buttonStyle={{ backgroundColor: theme.btnBackground }}
                                        buttonContent={
                                            <Image
                                                source={require('../public/next.png')}
                                                style={{ ...styles.imageButton, backgroundColor: theme.primary }}
                                            />
                                        }
                                    />
                                )
                            }
                        </View>
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
        flex: 1,
        marginHorizontal: 4,
        backgroundColor: '#D1D7DC',
        borderRadius: 100,
        height: 40,
        justifyContent: 'center',
        paddingLeft: 10,
    },
    imageButton: {
        height: 30,
        width: 30,
        backgroundColor: '#fff',
        borderRadius: 100
    },
    chatBox: {
        // flexDirection: 'row',

        backgroundColor: 'rgba(59, 127, 204, 0.10)',
        borderRadius: 10,
        justifyContent: 'center',
        paddingLeft: 10,
        // margin: 10,
        alignItems: 'center'


    },
    chatText: {
        paddingRight: 20,
        // textAlign: 'center',
        // paddingLeft: 10,
    }

});