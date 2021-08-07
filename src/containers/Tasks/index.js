import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import HeaderBack from '../../components/HeaderBack';
import TaskList from '../../components/TaskList';
import withTask from '../../hooks/withTask';
import { Task } from '../../services/task';
import { useRoute } from '@react-navigation/native'

const Tasks = ({ hanldeAction, tasks }) => {
    return (
        <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 20 }}>
            <HeaderBack />
            <TaskList hanldeAction={hanldeAction} data={tasks} />
        </View>
    )
}
export default withTask(Tasks)