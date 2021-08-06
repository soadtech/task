import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { stylesGlobal } from '../../styles'
import { styles } from './styles'

export default function CardCategory ({ name, icon, cant, handler }) {
    return (
        <TouchableOpacity onPress={handler} style={styles.container}>
            <View style={stylesGlobal.flexRow}>
                <Image style={{ width: 30, height: 30 }} resizeMode='contain' source={{ uri: icon }} />
                <Text style={styles.cantTask}>{name}</Text>
            </View>
            <View style={{ height: 1, width: '100%', backgroundColor: 'gray', marginVertical: 10 }}></View>
            <Text style={styles.cantTask}>{cant}</Text>
        </TouchableOpacity>
    )
}
