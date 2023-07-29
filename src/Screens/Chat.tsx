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
    TouchableOpacity,
    Button,
    Image,
} from "react-native";
import { HeaderChat } from "../Components/HeaderChat";
import { useState } from "react";
import { Navigathor } from "../Interface/navigationInterface";




export const Chat = ({ navigation, navigate, goBack }: Navigathor): JSX.Element => {




    const [chat, setChat] = useState<string>("")
    const [text, setText] = useState<string>("")
    const [send, setSend] = useState<boolean>(false)





    const { height } = useWindowDimensions()

    return (
        <View style={{ flex: 1 }} >

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
                                justifyContent:'flex-start',
                                marginVertical: 10,
                                backgroundColor: '#E5E5EA'
                            }}
                        >
                            <Text>{navigation.params?.lastMsg}</Text>

                        </View>
                    )
                }

                {
                    send &&
                    <View
                        style={{ ...styles.chatBox}}
                    >

                        <Text
                            style={styles.chatText}
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
                            backgroundColor: '#fff',

                        }}
                    >
                        <View
                            style={{
                                backgroundColor: '#fff',
                                flexDirection: 'row',

                            }}

                        >

                            <TextInput
                                placeholder="Say Hi"
                                onChangeText={newText => setText(newText)}
                                style={styles.textInput}
                                value={text}
                            />

                            {
                                text.length !== 0 && (
                                    <TouchableOpacity
                                        onPress={() => {
                                            setSend(true)
                                            setChat(text)
                                            setText("")
                                        }}

                                    >
                                        <View
                                            style={styles.sendButton}
                                        >
                                            <Image
                                                source={require('../public/next.png')}
                                                style={styles.imageButton}
                                            />
                                        </View>
                                    </TouchableOpacity>
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
    sendButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        borderRadius: 100,
        backgroundColor: '#33A3FF'
    },
    imageButton: {
        height: 30,
        width: 30,
        backgroundColor: '#fff',
        borderRadius: 100
    },
    chatBox: {
        flexDirection: 'row',

        backgroundColor: 'rgba(59, 127, 204, 0.10)',
        borderRadius: 100,
        height: 30,
        justifyContent: 'flex-end',
        paddingLeft: 10,
        alignItems: 'center'


    },
    chatText: {
        paddingRight: 20,
        // textAlign: 'center',
        // paddingLeft: 10,
    }

});