import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Text, Input, Button } from 'react-native-elements'
import { Context as authContext } from '../context/authContext'
import { SafeAreaView } from 'react-native-safe-area-context';

const Signin = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { state, signin } = useContext(authContext)

    const handleOnSignin = () => {
        signin({ email, password });
    }

    return (
        <SafeAreaView>
            <View>
                <Text h1>Signin</Text>
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
                <Button title="Solid Button" onPress={handleOnSignin} />
                <TouchableOpacity
                    onPress={()=>console.log(navigation.navigate('Signup'))}
                >
                    <Text>Are you new user? Signup here!</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Signin

const styles = StyleSheet.create({})
