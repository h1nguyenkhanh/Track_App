import React, { useContext, useState } from 'react';
import { Input, Button } from 'react-native-elements'
import { Context as locationContext } from '../context/locationContext';
import useSaveTrack from '../hooks/useSaveTrack'

const TrackForm = () => {
    const { state: { recording, name, locations }, startRecording, stopRecording, changeName } = useContext(locationContext);

    const [saveTrack] = useSaveTrack()

    return (
        <>
        <Input value={name} onChangeText={changeName}/>
        <Button onPress={recording?stopRecording:startRecording} title={recording?'Stop':'Start recording'}/> 
        {
             !recording && locations.length ? <Button onPress={saveTrack} title='Seve Recording' style={{marginTop: 20}}/> : null
        }
        </>
    )
}

export default TrackForm

