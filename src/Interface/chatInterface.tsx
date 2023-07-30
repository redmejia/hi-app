import { ImageProps } from "react-native";

export interface User {
    name?: string;
    last?: string;
    lastMsg?: string;
    isActive?: boolean;

    avatar: ImageProps;
}

// test data
export const userList: User[] = [
    { name: 'Sofia', last: 'Lina', avatar: require('../public/avatar.png'), isActive: true, lastMsg: 'hola' },
    { name: 'Sonia', last: 'Mejia', avatar: require('../public/avatar.png'), isActive: true, lastMsg: 'esto es un texto largo test uno dos tres four' },
    { name: 'Cristina', last: 'Munoz', avatar: require('../public/avatar.png'), isActive: true, lastMsg: 'this is a test, bye' },
    { name: 'Jose', last: 'Mejia', avatar: require('../public/avatar.png'), isActive: false },
    { name: 'Reynaldo', last: 'Mejia', avatar: require('../public/avatar.png'), isActive: false },
    { name: 'Maria', last: 'Mejia', avatar: require('../public/avatar.png'), isActive: true },
    { name: 'Reynaldo', last: 'Mejia', avatar: require('../public/avatar.png'), isActive: true },
    { name: 'Maria', last: 'Mejia', avatar: require('../public/avatar.png'), isActive: true },
    { name: 'Reynaldo', last: 'Mejia', avatar: require('../public/avatar.png'), isActive: false },
    { name: 'Maria', last: 'Mejia', avatar: require('../public/avatar.png'), isActive: true },
    { name: 'Reynaldo', last: 'Mejia', avatar: require('../public/avatar.png'), isActive: true },
    { name: 'Maria', last: 'Mejia', avatar: require('../public/avatar.png'), isActive: true },
]
