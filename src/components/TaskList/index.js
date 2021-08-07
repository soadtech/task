import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { styles } from './styles';

export default function TaskList ({ data = [] }) {
    return (
        <FlatList
            style={{ flex: 1 }}
            data={data}
            renderItem={({ item }) => (
                <View style={styles.container}>
                    <View>
                        <Text>{item.name}</Text>
                    </View>
                    <View style={{ justifyContent: 'flex-end' }}>
                        <Text>{item.status}</Text>
                    </View>
                </View>
            )}
            keyExtractor={item => item.id}
            inverted={false}
            ListEmptyComponent={
                <View style={{ alignItems: 'center' }}>
                    <Text>No hay datos</Text>
                </View>
            }

        />
    )
}
