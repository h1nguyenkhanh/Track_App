import { Accuracy, requestPermissionsAsync, watchPositionAsync } from 'expo-location';
import { useState, useEffect } from 'react';

export default (callback, listenState) => {
    const [err, setErr] = useState(null);
    const [subscriber, setSubscriber] = useState(null);
    const startWatching = async () => {
        try {
            await requestPermissionsAsync();
            const sub = await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            }, (location) => {
                callback(location, listenState)
            })
            setSubscriber(sub)
        } catch (e) {
            setErr(e);
        }
    }

    useEffect(() => {
        console.log(listenState);
        if(listenState) {
            startWatching();
        } 
        else {
            if (subscriber){
                subscriber.remove();
                setSubscriber(null);
            }
        }
        return () => {
            if (subscriber){
                subscriber.remove();
            }
        }
        
    }, [listenState])

    return [err]  

}