import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Input } from 'react-native-elements'

const SignIn = () => {
    return (
        <View>
            <Text h1>Sign in</Text>
            <Input
            placeholder='BASIC INPUT'
            />
        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({})
