import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { styles } from './styles'
import Header from '../../components/Header'
import CardCategory from '../../components/CardCategory'
import TextStrong from '../../components/TextStrong'
import TaskList from '../../components/TaskList'
import FloatingButton from '../../components/FloatingButton'


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

export default function Home () {
    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Header />

                <View style={styles.containerCardsCategory}>
                    <View style={{ marginBottom: 20 }}>
                        <TextStrong size={40}>Your task</TextStrong>
                    </View>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ flex: 1, width: '100%' }}>
                        <CardCategory cant='14' icon='https://image.flaticon.com/icons/png/512/1827/1827144.png' name='All' />

                        <CardCategory cant='8' icon='https://image.flaticon.com/icons/png/512/190/190411.png' name='Complete' />

                        <CardCategory cant='6' icon='https://image.flaticon.com/icons/png/512/2314/2314433.png' name='Finished' />
                    </ScrollView>
                </View>
            </View>
            <View style={{ flex: 1, marginTop: '20%', paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 23 }}>Recent task</Text>
                <View style={{ flex: 1, }}>
                    <TaskList data={data} />
                </View>

                <FloatingButton />
            </View>
        </View>
    )
}
