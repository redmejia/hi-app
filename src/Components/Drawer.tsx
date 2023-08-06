import { useContext } from "react";
import { Animated, StyleSheet, TouchableOpacity, View, useWindowDimensions } from "react-native";
import { ThemeContext } from "../Context/ThemeContex";

interface Props {
    drawerWidth?: number;



    children: React.ReactNode;
    navigationChildren: React.ReactNode;


    slideLeftValue: Animated.Value

}




export const Drawer = ({
    children,
    navigationChildren,
    slideLeftValue,
}: Props): React.ReactNode => {

    // const slideToLeft = useRef(new Animated.Value(0)).current;
    const { theme } = useContext(ThemeContext)


    const { height, width } = useWindowDimensions()


    const animatedStyle = {
        transform: [
            {
                translateX: slideLeftValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-width, 0],
                }),
            },
        ],
    }

    // background transparente
    const animatedStyleTransparentBG = {
        transform: [
            {
                translateX: slideLeftValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-width, 0],
                }),
            },
        ],
    }

    const close = () => {
        Animated.timing(slideLeftValue, {
            toValue: 0,
            duration: 600,
            useNativeDriver: true,
        }).start();
    }

    return (
        <View
            style={{ flex: 1 }}
        >
            {/* <View style={{ flex: 1 }} > */}
            <View>
                {children}
            </View>
            <Animated.View
                style={[
                    styles.drawer,
                    {
                        height: height * 0.95,
                        width: width,
                    },
                    animatedStyleTransparentBG
                ]}
            >
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={close}
                    style={{
                        backgroundColor: theme.iosDrawerBG,
                        height: height,
                        width: width
                    }}
                >

                </TouchableOpacity>
            </Animated.View>
            <Animated.View
                style={[
                    styles.drawer,
                    {
                        height: height * 0.95,
                        width: width * 0.80,
                    },
                    animatedStyle
                ]}
            >
                {navigationChildren}
            </Animated.View>

        </View>
    );
};

const styles = StyleSheet.create({
    drawer: {
        position: 'absolute',
        height: 200, // default
        width: 400, // default
        // backgroundColor: "red",
    }
});