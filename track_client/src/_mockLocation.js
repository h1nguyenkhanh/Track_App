import * as Location from 'expo-location'

const tenMeterWithDegrees = 0.0001;

const getLocation = increment => {
    return {
        timestamp: 10000000,
        coords:  {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 5,
            longitude: 105.83838367240553 + increment  * tenMeterWithDegrees ,
            latitude: 21.028534589897244 + increment * tenMeterWithDegrees
        }
    }
}

let counter = 0;

setInterval(()=>{
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    })
    counter = counter + 0.5
}, 1000);