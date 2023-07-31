import { Text, View } from "react-native";
import { Button } from "./Button";
import { Divider } from "./Divider";

export const AppSetting = (): JSX.Element => {
    return (
        <View
            style={{ flex: 1 }}
        >

            <View
                style={{
                    paddingVertical: 10,
                    marginHorizontal: 10
                }}
            >
                <Text> Change Theme </Text>
                <Button
                    action={() => console.log('lt-dk')}
                />
                <Divider />
                <Text> Change Active Status </Text>
                <Button
                    action={() => console.log('change status')}
                />
                <Divider />
                <Text> Change Picture </Text>
                <Button
                    action={() => console.log('change picture')}
                />
            </View>
            <View
                style={{
                    position: 'absolute',
                    bottom: 40,
                    right: 10
                }}
            >
                <Text> Log out </Text>
                <Button
                    action={() => console.log('log out')}
                />
            </View>
        </View>
    );
};