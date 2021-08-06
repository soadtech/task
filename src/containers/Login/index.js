import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import CustomInput from '../../components/CustomInput'
import { colors } from '../../helpers/contants'
import useFetchPost from '../../hooks/usePost';
import { User } from '../services/users';

export default function Login ({ navigation }) {
    const { isLoading } = useFetchPost(handlerSaveName, User);

    function handlerSaveName () {
        console.log('guardado');
        navigation.navigate('Home')
    }
    return (
        <View style={{ paddingHorizontal: 20, paddingVertical: 20, flex: 1, justifyContent: 'space-between' }}>
            <View>
                <Text>Digita tu nombre</Text>
                <CustomInput placeholder='Your name' />
            </View>

            <TouchableOpacity style={{ marginTop: 20, backgroundColor: colors.primary, paddingVertical: 10, borderRadius: 15 }}>
                <Text style={{ textAlign: 'center', color: 'white' }}>Ingresar</Text>
            </TouchableOpacity>
        </View>
    )
}
