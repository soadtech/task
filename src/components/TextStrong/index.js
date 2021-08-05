import React from 'react'
import { Text } from 'react-native'

export default function TextStrong ({ children, color = 'white', size = 16 }) {
    return (
        <Text style={{ fontWeight: 'bold', color, fontSize: size }}>{children}</Text>
    )
}
