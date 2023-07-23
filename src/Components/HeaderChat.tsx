import { StyleSheet, Text, View } from "react-native";
import { Card } from "./Card";

export const HeaderChat = (): JSX.Element => {
    return (

        <View
            style={styles.headerBox}
        >
            <View style={{ marginHorizontal: 10, height: 20, width: 20, backgroundColor: 'blue' }} />

            <Card
                cardStyle={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}
                userComponent={
                    <View>
                        <Text style={styles.cardText}>Reynaldo Mejia</Text>

                    </View>
                }
                avatar={require('../public/avatar.png')}
                isActive={true}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    headerBox: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    cardText: {
        color: '#000',
        fontWeight: '600',
        fontSize: 11,
        marginLeft: 10,
    }
});