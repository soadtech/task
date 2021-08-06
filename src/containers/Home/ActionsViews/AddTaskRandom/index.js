import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { colors } from '../../../../helpers/contants';

const RESTAR = 1;
const SUMAR = 2

const Button = ({ handler, action }) => (
    <TouchableOpacity style={{ backgroundColor: colors.primary, width: 35, height: 35, alignItems: 'center', justifyContent: 'center', borderRadius: 150 }} onPress={() => handler(action)}>
        <Text style={{ color: 'white', fontSize: 20 }}>{action == RESTAR ? '-' : '+'}</Text>
    </TouchableOpacity>
)

export default function AddTaskRandom () {
    const [count, setCount] = useState(1)

    const handlerCount = (action) => {
        if (action == RESTAR) {
            if (count > 1) {
                setCount(count - 1)
            }
            return
        }
        setCount(count + 1)

    }
    return (
        <View style={{ width: '100%', alignItems: 'center', height: 100, justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '40%', alignItems: 'center' }}>
                <Button handler={handlerCount} action={RESTAR} />
                <Text style={{ fontSize: 30 }}>{count}</Text>
                <Button handler={handlerCount} action={SUMAR} />
            </View>
            <TouchableOpacity style={{ backgroundColor: colors.primary, width: '90%', paddingVertical: 10, borderRadius: 15 }}>
                <Text style={{ textAlign: 'center', color: 'white' }}>Generar</Text>
            </TouchableOpacity>
        </View>
    )
}
