import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import HeaderBack from '../../components/HeaderBack';
import TaskList from '../../components/TaskList';
import { Task } from '../../services/task';

export default function Tasks ({ route }) {
    const [tasks, setTasks] = useState([])
    const getTask = async () => {
        const data = await Task.getByType(route.params)
        setTasks(data)
    }
    useEffect(() => {
        getTask()
    }, [])
    return (
        <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 20 }}>
            <HeaderBack />
            <TaskList data={tasks} />
        </View>
    )
}
