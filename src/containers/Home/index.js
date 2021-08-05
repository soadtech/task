import React from 'react'
import { View, Text } from 'react-native'
import Header from '../../components/Header'
import { styles } from './styles'

export default function Home () {
    return (
        <View style={styles.container}>
            <View>
                <Header />
            </View>
            <View style={{ flex: 0.8 }}>
                <Text>Homee 1</Text>
            </View>
        </View>
    )
}
