import React from 'react'
import { View, Image } from 'react-native'
import { styles } from './styles'

export default function Avatar ({ img = 'https://i.ibb.co/g3qbhkY/036-person.png' }) {
    return (
        <View>
            <Image style={styles.avatar} resizeMode='cover' source={{ uri: img }} />
        </View>
    )
}
