import React, { useEffect } from 'react'
import { View, Text } from 'react-native';
import useAuth from '../../hooks/useAuth';
import { createTablesDatabase } from '../../services/createTablesDataBase';

export default function Loader () {
    const { authenticated } = useAuth()
    useEffect(() => {
        createTablesDatabase(true);
    }, [])
    return (
        <View>
            <Text>Loader</Text>
        </View>
    )
}
