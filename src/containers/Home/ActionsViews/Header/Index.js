import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export default function Header ({ handlerBack, handlerClose }) {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={handlerBack}>
                <Text>Atras</Text>
            </TouchableOpacity>
            <Text>Agregando task</Text>
            <TouchableOpacity onPress={handlerClose}>
                <Text>X</Text>
            </TouchableOpacity>
        </View>
    )
}
