import { Text, View, StyleSheet, Image, ImageProps, StyleProp, ViewStyle, TextStyle } from "react-native";

export interface CardProps {
    avatar: ImageProps;
    name?: string;
    last?: string;

    isActive?: boolean;

    cardStyle?: StyleProp<ViewStyle>;

    textStyle?: StyleProp<TextStyle>;

}

export const Card = ({
    cardStyle,
    textStyle,
    avatar,
    name,
    last,
    isActive }: CardProps): JSX.Element => {
    return (
        <View
            style={[styles.container, cardStyle]}
        >
            <View style={styles.avatar}>
                <View style={{
                    ...styles.active,
                    borderWidth: isActive ? 2 : 0,
                    // borderBottomWidth: isActive ? 2 : 0,
                    // borderColor: isActive ? 'green' : '#fff',
                }}>
                    <Image
                        source={avatar}
                        style={{ height: 40, width: 40 }}
                    />

                </View>
            </View>

            <Text
                style={[styles.text, textStyle]}
            >
                {name}
            </Text>
            <Text
                style={[styles.text, textStyle]}
            >
                {last}
            </Text>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    avatar: {
        height: 55,
        width: 55,
        backgroundColor: '#CAD2DB',
        borderRadius: 100,

        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        height: 50,
        width: 50,
        borderRadius: 100,

        // borderLeftWidth: 2,
        borderColor: 'green',

        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#000',
        fontSize: 10,
        textAlign: 'center',
    }
});
