import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Button } from 'react-native-elements'
import { Context as authContext } from '../context/authContext'
import { SafeAreaView } from 'react-native-safe-area-context';

const AccountScreen = () => {
    const { signout } = useContext(authContext);
    return (
        <SafeAreaView>
            <View>
                <Text h1>Account</Text>
                <Button title="Sign out" onPress={signout} />
            </View>
        </SafeAreaView>
    )
}

export default AccountScreen

const styles = StyleSheet.create({})
