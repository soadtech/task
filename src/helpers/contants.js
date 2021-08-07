import { Dimensions } from 'react-native';


export const dimensions = {
    windowWidth: Dimensions.get('window').width,
    windowHeight: Dimensions.get('window').height
}

export const colors = {
    primary: '#de3e50',
    whiteLight: '#fdf7f8ab'
}

export const typeTask = {
    NEW: 1,
    COMPLETE: 2,
    FINISHED: 3
}