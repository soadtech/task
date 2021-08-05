import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

export default function CardTypeSaveTask ({ icon, text, handler }) {

    return (
        <TouchableOpacity onPress={handler}>
            <Image style={{ width: 50, height: 50 }} source={{ uri: icon }} />
            <Text>{text}</Text>
        </TouchableOpacity>
    )
}
