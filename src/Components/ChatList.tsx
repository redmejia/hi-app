import { TouchableOpacity, View } from "react-native";
import { Card, CardProps } from "./Card";

const userList: CardProps[] = [
    { name: 'Sofia', last: 'Lina', avatar: require( '../public/avatar.png'), isActive: false, },
    { name: 'Sonia', last: 'Mejia', avatar: require( '../public/avatar.png'), isActive: true},
    { name: 'Cristina', last: 'Munoz',  avatar: require( '../public/avatar.png'), isActive: true},
    { name: 'Jose', last: 'Mejia',  avatar: require( '../public/avatar.png'), isActive: false},
    { name: 'Reynaldo', last: 'Mejia',  avatar: require( '../public/avatar.png'), isActive: false},
    { name: 'Maria', last: 'Mejia',  avatar: require( '../public/avatar.png'),isActive: true},
    { name: 'Reynaldo', last: 'Mejia',  avatar: require( '../public/avatar.png'), isActive: true},
    { name: 'Maria', last: 'Mejia',  avatar: require( '../public/avatar.png'), isActive: true},
    { name: 'Reynaldo', last: 'Mejia',  avatar: require( '../public/avatar.png'), isActive: false},
    { name: 'Maria', last: 'Mejia',  avatar: require( '../public/avatar.png'),isActive: true},
    { name: 'Reynaldo', last: 'Mejia',  avatar: require( '../public/avatar.png'), isActive: true},
    { name: 'Maria', last: 'Mejia',  avatar: require( '../public/avatar.png'), isActive: true},
]

export const ChatList = (): JSX.Element => {
    const chatList = userList.map((user, index) => {
        return (
            <TouchableOpacity
                key={index}
                style={{
                    // marginHorizontal: 2,
                    marginTop: 5
                }}
            >
                <Card
                    name={user.name}
                    last={user.last}
                    avatar={user.avatar}
                    isActive={user.isActive}
                    cardStyle={{flexDirection:'row'}}
                    textStyle={{ marginTop: 8, paddingLeft: 3}}
                />
            </TouchableOpacity>
        )
    })
    return (
        <View
            style={{marginHorizontal: 10, marginTop: 6}}
        >
            {chatList}
        </View>
    );
};