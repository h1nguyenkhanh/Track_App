import React, { useContext } from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import MapView, { Polyline, Circle } from 'react-native-maps'
import { Context as locationContext} from '../context/locationContext'

const Map = () => {
    const { state: { currentLocation, locations }, addLocation } = useContext(locationContext);

    if(!currentLocation) {
        return <ActivityIndicator size="large" style={{marginTop: 200 }}/>;
    }

    return (
        <MapView 
            style={styles.map}
            initialRegion={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01, 
            }}
        >
            <Circle
                center={currentLocation.coords}
                radius={20}
                strokeColor="rgba(158,158,255, 1)"
                fillColor="rgba(158,158,255,0.5)"
            />
            <Polyline coordinates={locations.map(loc => loc.coords)}/>
        </MapView>
    )
}

export default Map

const styles = StyleSheet.create({
    map: {
        height: 300
    }
})
