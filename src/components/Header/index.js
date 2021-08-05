import React from 'react'
import { View, Text } from 'react-native'
import Avatar from '../Avatar'
import TextStrong from '../TextStrong/TextStrong'
import { styles } from './styles'

export default function Header () {
    return (
        <View style={styles.container}>
            <View style={styles.infoProfile}>
                <View>
                    <Text style={styles.textInfoUser}>Hi <TextStrong>Fernando</TextStrong> </Text>
                    <Text>You have <TextStrong>5</TextStrong> task</Text>
                </View>
                <Avatar />
            </View>
        </View>
    )
}
