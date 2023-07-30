import {
    View,
    StyleSheet,
    Image,
    StyleProp,
    ViewStyle,
    ImageStyle
} from "react-native";
import { User } from "../Interface/chatInterface";

export interface Props extends User {
    userComponent?: React.ReactNode; // user info or user info and  last msg recived
    cardStyle?: StyleProp<ViewStyle>;
    imageStyle?: StyleProp<ImageStyle>;
    avatarContainer?: StyleProp<ImageStyle>;
}

export const Card = ({
    cardStyle,
    avatar,
    avatarContainer,
    imageStyle,
    userComponent,
    isActive
}: Props): JSX.Element => {
    return (
        <View
            style={[styles.container, cardStyle]}
        >
            <View style={[styles.avatar, avatarContainer]}>

                <View style={{
                    ...styles.active,
                    borderWidth: isActive ? 2 : 0,
                    // borderBottomWidth: isActive ? 2 : 0,
                    // borderColor: isActive ? 'green' : '#fff',
                }}>
                    <Image
                        source={avatar}
                        style={[styles.imageSizeStyle, imageStyle]}
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
        // height: 55,
        // width: 55,
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
    },
    imageSizeStyle: {
        height: 40,
        width: 40
    }
});
