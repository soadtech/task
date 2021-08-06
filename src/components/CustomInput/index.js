import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { styles } from './styles'

//numberOfLines={4} multiline 
export default function CustomInput ({ textArea, label, placeholder }) {
    return (
        <>
            <Text style={{ marginBottom: 7 }}>{label}</Text>
            <View style={styles.container}>
                {textArea ? (
                    <TextInput numberOfLines={4} multiline placeholder={placeholder} />
                ) : (
                    <TextInput placeholder={placeholder} />
                )}

            </View>
        </>
    )
}
