import { User } from "./chatInterface";

// this implementation is for learning porpuse not use in prodiction
// Esta implementacion is por proposito de aprendizaje no debe ser usado en producion

export interface Navigation {

    root?: boolean;
    screen?: string;
    params?: User;


}

export interface Navigathor  {

    navigation: Navigation;

    navigate?: (nav: Navigation, root: boolean, screen: string, params?: User) => void
    goBack?: () => void

}

