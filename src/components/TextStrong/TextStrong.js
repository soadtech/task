import React from 'react'
import { Text } from 'react-native'

export default function TextStrong ({ children, color = 'white' }) {
    return (
        <Text style={{ fontWeight: 'bold', color }}>{children}</Text>
    )
}
