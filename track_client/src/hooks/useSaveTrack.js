import { useContext } from 'react'
import {Context as trackContext} from '../context/trackContext'
import {Context as locationContext} from '../context/locationContext'

export default () => {
    const { createTrack } = useContext(trackContext);
    const { state: { locations, name}} = useContext(locationContext)

    const saveTrack = () => {
        createTrack(name, locations);
    }

    return [saveTrack]
}