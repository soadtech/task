import React from 'react'
import { View, Text } from 'react-native'
import HeaderBack from '../../components/HeaderBack';
import TaskList from '../../components/TaskList';

const data = [
    {
        id: '1',
        name: 'Ir al super',
        description: 'Comprar una libra de arroz',
        status: 1
    },
    {
        id: '2',
        name: 'Ir al super',
        description: 'Comprar una libra de arroz',
        status: 1
    },
    {
        id: '3',
        name: 'Ir al super',
        description: 'Comprar una libra de arroz',
        status: 1
    },
    {
        id: '4',
        name: 'Ir al super',
        description: 'Comprar una libra de arroz',
        status: 1
    },
]

export default function Tasks ({ route }) {
    return (
        <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 20 }}>
            <HeaderBack />
            <TaskList data={data} />

        </View>
    )
}
