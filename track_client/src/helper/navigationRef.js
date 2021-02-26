import { CommonActions } from '@react-navigation/native';

let navigator;

export const setNavigator = (navigatorElement) => {
    navigator = navigatorElement;
}

export const navigate = (routeName, params) => {
    navigator.dispatch(
        CommonActions.navigate({
            name: routeName,
            params
        })
    )
}