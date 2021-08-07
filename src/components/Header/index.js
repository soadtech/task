import React from 'react'
import { View, Text } from 'react-native'
import useAuth from '../../hooks/useAuth'
import Avatar from '../Avatar'
import TextStrong from '../TextStrong'
import { styles } from './styles'

export default function Header ({ total }) {
    const { user } = useAuth()
    return (
        <View style={styles.container}>
            <View style={styles.infoProfile}>
                <View>
                    <Text style={styles.textInfoUser}>Hi <TextStrong size={25}>{user.name}</TextStrong> </Text>
                    <Text style={{ color: 'white' }}>You have <TextStrong>{total}</TextStrong> task</Text>
                </View>
                <Avatar />
            </View>
        </View>
    )
}
