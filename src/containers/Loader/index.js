import React, { useEffect } from 'react'
import { View, Text } from 'react-native';
import useAuth from '../../hooks/useAuth';
import { createTablesDatabase } from '../../services/createTablesDataBase';

export default function Loader ({ navigation }) {
    const { authenticated } = useAuth()
    useEffect(() => {
        createTablesDatabase(true);
    }, [])
    useEffect(() => {
        if (authenticated) {
            navigation.navigate('Home')
        } else {
            navigation.navigate('Login')
        }

    }, [authenticated])
    return (
        <View>
            <Text>Loader</Text>
        </View>
    )
}
