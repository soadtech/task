import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import CustomInput from '../../../../components/CustomInput'
import { colors, typeTask } from '../../../../helpers/contants'
import useValidator from '../../../../hooks/useValidator'
import { Task } from '../../../../services/task'
import validTask from '../../../../helpers/validations/validateTask'
import { styles } from './styles'

export default function AddTask ({ getTask, handlerClose }) {
    const INITIAL_STATE = {
        title: '',
        description: ''
    }
    const { values, errors, handleSubmit, handleChange } = useValidator(INITIAL_STATE, validTask, handlerSubmit)

    async function handlerSubmit () {
        await Task.create({ title: values.title, description: values.description, type: typeTask.NEW })
        handlerClose()
        getTask()
    }
    return (
        <View style={styles.header}>
            <View style={{ marginBottom: 20 }}>
                <CustomInput name='title' handleChange={handleChange} errors={errors} value={values.title} label='Name of task' placeholder='Name' />
            </View>
            <CustomInput name='description' handleChange={handleChange} errors={errors} value={values.description} textArea label='Description' placeholder='Description task' />
            <TouchableOpacity onPress={handleSubmit} style={{ backgroundColor: colors.primary, width: '100%', paddingVertical: 10, borderRadius: 15, marginTop: 20 }}>
                <Text style={{ textAlign: 'center', color: 'white' }}>Guardar</Text>
            </TouchableOpacity>
        </View>
    )
}
