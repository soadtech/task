import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import CustomInput from '../../../../components/CustomInput'
import { colors } from '../../../../helpers/contants'
import { styles } from './styles'

export default function AddTask () {
    return (
        <View style={styles.header}>
            <View style={{ marginBottom: 20 }}>
                <CustomInput label='Name of task' placeholder='Name' />
            </View>
            <CustomInput textArea label='Description' placeholder='Description task' />
            <TouchableOpacity style={{ backgroundColor: colors.primary, width: '100%', paddingVertical: 10, borderRadius: 15, marginTop: 20 }}>
                <Text style={{ textAlign: 'center', color: 'white' }}>Guardar</Text>
            </TouchableOpacity>
        </View>
    )
}
