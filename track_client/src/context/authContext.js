import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from './createDataContext';
import trackApi from '../api/trackApi'
import { navigate } from '../helper/navigationRef'

const reducer = (state, action) => {
    switch(action.type) {
        case 'signin':
            return { token: action.payload, errorMessage: '', isLoading: false};
        case 'add_error':
            return {...state, errorMessage: action.payload}
        case 'signout':
            return {...state, token: null}
        default:
            return state;
    }
}

const signin = (dispatch) => {
    return async ({email, password}) => {
        try {
            const response = await trackApi.post('/signin', {email, password})
            const token = response.data.token;
            await AsyncStorage.setItem('token', token)
            dispatch({type: 'signin', payload: token})

        } catch (err) {
            console.log(err.message);
            dispatch({type: 'add_error', payload: "Something went wrong with signin process"})
        }
    }
}

const signup = (dispatch) => {
    return async ({email, password}) => {
        try {
            const response = await trackApi.post('/signup', {email, password})
            const token = response.data.token;
            await AsyncStorage.setItem('token', token)
            dispatch({type: 'signin', payload: token})

        } catch (err) {
            console.log(err.message);
            dispatch({type: 'add_error', payload: "Something went wrong with signup process"})
        }
    }
}

const signout = (dispatch) => {
    return async () => {
        await AsyncStorage.removeItem('token')
        dispatch({type: 'signout'})
    }
}

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if(token) {
        return dispatch({type: 'signin', payload: token});
    }
    
    dispatch({type: 'signin'});
}

export const { Context, Provider } = createDataContext(
    reducer, 
    { signin, signup, signout, tryLocalSignin }, 
    {
        token: null,
        errorMessage: '',
        isLoading: true
    }
)