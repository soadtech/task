import React, { useRef, useState, useEffect } from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import { Modalize } from 'react-native-modalize';
import CardTypeSaveTask from '../components/CardTypeSaveTask';
import CustomInput from '../components/CustomInput';
import HeaderMoalize from '../containers/Home/ActionsViews/Header';
import EditTask from '../containers/Tasks/components/EditTask';
import { Task } from '../services/task';

const INITIAL_HEIGHT_MODALIZE = 140
const withTask = (Component) => {
    function WrapperChildren (props) {
        const [action, setAction] = useState(0)
        const [tasks, setTasks] = useState([])
        const [taskSelected, setTaskSelected] = useState([])
        const [heightModalize, setHeightModalize] = useState(INITIAL_HEIGHT_MODALIZE)
        const modalizeRef = useRef(null);

        const hanldeAction = (taskId) => {
            setTaskSelected(taskId)
            modalizeRef.current?.open();
        }
        const hiddenModal = () => {
            modalizeRef.current?.close();
        }
        const renderAction = (st) => {
            switch (st) {
                case 0:
                    return (
                        <>
                            <View>
                                <CardTypeSaveTask handler={handlerCompleteTask} text='Complete' icon='https://image.flaticon.com/icons/png/512/157/157977.png' />
                            </View>
                            <View>
                                <CardTypeSaveTask handler={() => { setHeightModalize(500); setAction(1) }} text='Edit' icon='https://image.flaticon.com/icons/png/512/1827/1827933.png' />
                            </View>
                            <View>
                                <CardTypeSaveTask handler={() => { Alert.alert('Esta seguro que desea eliminar?') }} text='Delete' icon='https://image.flaticon.com/icons/png/512/3096/3096673.png' />
                            </View>
                        </>
                    )
                case 1:
                    return (<EditTask />)
            }
        }

        const getTask = async () => {
            const data = await Task.get()
            setTasks(data)
        }
        useEffect(() => {
            getTask()
        }, [])
        const handlerCompleteTask = async () => {
            await Task.completeTask(taskSelected)
            hiddenModal()
            getTask()
        }
        return (
            <>
                <Component getTask={getTask} tasks={tasks} hanldeAction={hanldeAction} data={props.data} />
                <Modalize modalHeight={heightModalize} ref={modalizeRef}>
                    <View>
                        <HeaderMoalize state={0} handlerClose={() => { setAction(0); setHeightModalize(INITIAL_HEIGHT_MODALIZE); modalizeRef.current?.close() }} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            {renderAction(action)}
                        </View>
                    </View>
                </Modalize>
            </>
        )
    }
    return WrapperChildren
}
export default withTask;
