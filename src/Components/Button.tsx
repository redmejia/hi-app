import React from "react";
import {
    StyleProp,
    StyleSheet,
    TouchableOpacity,
    View,
    ViewStyle
} from "react-native";

interface Props {
    buttonActiveOpacity?: number;

    action?: () => void;


    buttonStyle?: StyleProp<ViewStyle>;
    buttonContent?: React.ReactNode;


}

export const Button = ({
    buttonStyle,
    buttonContent,
    buttonActiveOpacity = 0.7,
    action
}: Props): JSX.Element => {
    return (
        <TouchableOpacity
            onPress={action}
            activeOpacity={buttonActiveOpacity}
        >
            <View
                style={[styles.button, buttonStyle]}
            >
                {buttonContent}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        borderRadius: 100,
        backgroundColor: '#33A3FF'
    }
});