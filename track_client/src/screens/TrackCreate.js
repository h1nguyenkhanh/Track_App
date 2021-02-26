import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import Map from '../components/Map';
import { Context as locationContext } from '../context/locationContext';
import useLocation from '../hooks/useLocation'
import TrackForm from '../components/TrackForm'
import '../_mockLocation';

const TrackCreate = ({navigation}) => {
    const { addLocation, state: { recording }, startRecording, stopRecording } = useContext(locationContext);
    const [err] = useLocation(addLocation, recording);

    useEffect(() => {
        const unsubscribeOnBlur = navigation.addListener('blur', () => {
     
            stopRecording();
        })
        const unsubscribeOnFocus = navigation.addListener('focus', () => {
            startRecording();
        })
        return () => {
            unsubscribeOnBlur();
            unsubscribeOnFocus();
        }
    }, [navigation])
// console.log(recording);
    return (
        <SafeAreaView>
            <Map/>
            {/* <Button onPress={recording?stopRecording:startRecording} title={recording?'Stop':'Start recording'}/>  */}
            <Text>{err}</Text>
            <TrackForm/>
        </SafeAreaView>
    )
}

export default TrackCreate

const styles = StyleSheet.create({})
