import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import CustomInput from '../../components/CustomInput'
import { colors } from '../../helpers/contants'
import validName from '../../helpers/validations/validateName';
import useValidator from '../../hooks/useValidator';
import { User } from '../../services/users';

export default function Login ({ navigation }) {
    const INITIAL_STATE = {
        name: ''
    }
    const { values, errors, handleSubmit, handleChange } = useValidator(INITIAL_STATE, validName, handlerSubmit)

    async function handlerSubmit () {
        await User.create(values.name)
        navigation.navigate('Home')
    }
    return (
        <View style={{ paddingHorizontal: 20, paddingVertical: 20, flex: 1, justifyContent: 'space-between' }}>
            <View>
                <Text>Digita tu nombre</Text>
                <CustomInput name='name' handleChange={handleChange} errors={errors} value={values.name} placeholder='Your name' />
            </View>

            <TouchableOpacity onPress={handleSubmit} style={{ marginTop: 20, backgroundColor: colors.primary, paddingVertical: 10, borderRadius: 15 }}>
                <Text style={{ textAlign: 'center', color: 'white' }}>Ingresar</Text>
            </TouchableOpacity>
        </View>
    )
}
