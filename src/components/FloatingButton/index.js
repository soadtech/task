import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export default function FloatingButton ({ handler }) {
    return (
        <TouchableOpacity onPress={handler} style={styles.botton}>
            <Text style={styles.icon}>+</Text>
        </TouchableOpacity>
    )
}
