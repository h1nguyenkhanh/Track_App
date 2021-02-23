import React, { useState, useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import { Context as authContext} from '../context/authContext'

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { state, signup } = useContext(authContext)

    const handleOnSignup = () => {
        signup({email, password});
    }

    return (
        <View>
            <Text h1>Sign up</Text>
            <Input placeholder='Email'
                value={email}
                onChangeText={setEmail}
                autoCapitalize='none'
                autoCorrect={false}
            />
            <Input placeholder='Password'
                value={password}
                onChangeText={setPassword}
                autoCapitalize='none'
                autoCorrect={false}
            />
            {state.errorMessage ? <Text>{state.errorMessage}</Text> : null}
            <Button title="Solid Button" onPress={handleOnSignup}/>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({})
