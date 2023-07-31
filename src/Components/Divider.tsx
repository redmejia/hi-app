import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

interface Props {
    hairLine?: boolean;
    dividerStyle?: StyleProp<ViewStyle>
}

export const Divider = ({ dividerStyle, hairLine = false }: Props): JSX.Element => {
    return (
        <View
            style={[dividerStyle,
                {
                    padding: 3,
                    bottom: 3,
                    borderBottomWidth: hairLine == true ? StyleSheet.hairlineWidth : 0,
                }]
            }
        />

    );
};