import React from "react";
import { Animated, StyleSheet, View, useWindowDimensions } from "react-native";

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

    return (
        <View
            style={{ flex: 1 }}
        >
            <View style={{ flex: 1 }} >
                {children}
            </View>
            <Animated.View
                style={[
                    styles.drawer,
                    {
                        height: height * 0.93,
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
        backgroundColor: "#fff",
    }
});