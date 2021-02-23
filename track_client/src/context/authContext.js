import { As } from 'react-native'
import createDataContext from './createDataContext';
import trackApi from '../api/trackApi'

const reducer = (state, action) => {
    switch(action.type) {
        case 'signin':
            return {...state};
        case 'signup':
            return {...state, errorMessage: null};
        case 'add_error':
            return {...state, errorMessage: action.payload}
        default:
            return state;
    }
}

const signin = (dispatch) => {
    return () => {
        dispatch({type: 'signin'})
    }
}

const signup = (dispatch) => {
    return async ({email, password}) => {
        try {
            const response = await trackApi.post('/signup', {email, password})
            dispatch({type: 'signup', payload: response.data})
        } catch (err) {
            dispatch({type: 'add_error', payload: "Something went wrong with sign up process"})
        }
    }
}

const signout = (dispatch) => {
    return () => {
        dispatch({type: 'signin'})
    }
}

export const { Context, Provider } = createDataContext(
    reducer, 
    { signin, signup, signout }, 
    {
        token: '',
        errorMessage: null
    }
)