import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { styles } from './styles';

export default function TaskList ({ data = [], hanldeAction }) {
    return (
        <FlatList
            style={{ flex: 1 }}
            data={data}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={hanldeAction} key={item.id} style={styles.container}>
                    <View>
                        <Text>{item.name}</Text>
                    </View>
                    <View style={{ justifyContent: 'flex-end' }}>
                        <Text>{item.type}</Text>
                    </View>
                </TouchableOpacity>
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
