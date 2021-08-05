import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'

export default function FloatingButton () {
    return (
        <View style={styles.botton}>
            <Text style={styles.icon}>+</Text>
        </View>
    )
}
