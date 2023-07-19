import {
    View,
    StyleSheet,
    Image,
    ImageProps,
    StyleProp,
    ViewStyle
} from "react-native";

export interface CardProps {
    name?: string;
    last?: string;
    lastMsg?: string;
    isActive: boolean;



    userComponent?: React.ReactNode; // user info or user info and  last msg recived
    avatar: ImageProps;
    cardStyle?: StyleProp<ViewStyle>;


}

export const Card = ({
    cardStyle,
    avatar,
    userComponent,
    isActive
}: CardProps): JSX.Element => {
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
            {userComponent}
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
