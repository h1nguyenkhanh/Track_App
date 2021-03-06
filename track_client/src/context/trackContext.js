import createDataContext from './createDataContext'
import trackApi from '../api/trackApi'

const trackReducer = (state, action) => {
    switch (action.type) {
        default: 
            return state;
    }
}

const fetchTracks = dispatch => () => {};
const createTrack = dispatch => (name, locations) => {
    console.log(name, locations.length);
};

export const { Context, Provider } = createDataContext(
    trackReducer,
    { fetchTracks, createTrack },
    []
)