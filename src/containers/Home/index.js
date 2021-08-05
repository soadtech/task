import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { styles } from './styles'
import Header from '../../components/Header'
import CardCategory from '../../components/CardCategory'
import TextStrong from '../../components/TextStrong/TextStrong'

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
            <View style={{ flex: 0.8, marginTop: '20%', paddingHorizontal: 20 }}>
                <Text>Recent task</Text>

            </View>
        </View>
    )
}
