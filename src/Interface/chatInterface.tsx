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
    { name: 'Sofia', last: 'Lina', avatar: require('../public/avatar.png'), isActive: true, lastMsg: 'hola como estas?' },
    { name: 'Sonia', last: 'Mejia', avatar: require('../public/avatar.png'), isActive: true, lastMsg: 'Bonjour, comment allez-vous' },
    { name: 'Cristina', last: 'Munoz', avatar: require('../public/avatar.png'), isActive: true, lastMsg: 'Привет, как дела' },
    { name: 'Jose', last: 'Mejia', avatar: require('../public/avatar.png'), isActive: false, lastMsg: 'Oi, como vai' },
    { name: 'Reynaldo', last: 'Mejia', avatar: require('../public/avatar.png'), isActive: false, lastMsg: 'Aloha pehea ʻoe' },
    { name: 'Maria', last: 'Mejia', avatar: require('../public/avatar.png'), isActive: true, lastMsg: '你好你好吗' },
    { name: 'Reynaldo', last: 'Mejia', avatar: require('../public/avatar.png'), isActive: true },
    { name: 'Maria', last: 'Mejia', avatar: require('../public/avatar.png'), isActive: true },
    { name: 'Reynaldo', last: 'Mejia', avatar: require('../public/avatar.png'), isActive: false },
    { name: 'Maria', last: 'Mejia', avatar: require('../public/avatar.png'), isActive: true },
    { name: 'Reynaldo', last: 'Mejia', avatar: require('../public/avatar.png'), isActive: true },
    { name: 'Maria', last: 'Mejia', avatar: require('../public/avatar.png'), isActive: true },
]
