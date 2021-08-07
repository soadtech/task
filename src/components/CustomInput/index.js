import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { styles } from './styles'

//numberOfLines={4} multiline 
export default function CustomInput ({ disabled = false, name, handleChange, value, errors, textArea, label, placeholder }) {
    return (
        <>
            <Text style={{ marginBottom: 7 }}>{label}</Text>
            <View style={styles.container}>
                {textArea ? (
                    <TextInput
                        editable={!disabled}
                        onChangeText={(onchage) => handleChange(name, onchage)}
                        value={value}
                        numberOfLines={4}
                        multiline
                        placeholder={placeholder}
                    />
                ) : (
                    <TextInput
                        editable={!disabled}
                        onChangeText={(onchage) => handleChange(name, onchage)}
                        value={value}
                        placeholder={placeholder} />
                )}
            </View>
            {errors[name] && (<Text style={styles.msjError}>{errors[name]}</Text>)}
        </>
    )
}
