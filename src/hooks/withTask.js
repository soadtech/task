import React, { useRef, useState, useEffect } from 'react';
import { View, Alert } from 'react-native';
import { Modalize } from 'react-native-modalize';
import CardTypeSaveTask from '../components/CardTypeSaveTask';
import HeaderMoalize from '../containers/Home/ActionsViews/Header';
import EditTask from '../containers/Tasks/components/EditTask';
import { Task } from '../services/task';

const INITIAL_HEIGHT_MODALIZE = 140
const withTask = (Component) => {
    function WrapperChildren (props) {
        console.log('props', props.route.params);
        const [statistics, setStatistics] = useState({})
        const [action, setAction] = useState(0)
        const [tasks, setTasks] = useState([])
        const [taskSelected, setTaskSelected] = useState([])
        const [heightModalize, setHeightModalize] = useState(INITIAL_HEIGHT_MODALIZE)
        const modalizeRef = useRef(null);

        const hanldeAction = (task) => {
            setTaskSelected(task)
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
                                <CardTypeSaveTask handler={handlerDeleteTask} text='Delete' icon='https://image.flaticon.com/icons/png/512/3096/3096673.png' />
                            </View>
                        </>
                    )
                case 1:
                    return (<EditTask taskSelected={taskSelected} getTask={getTask} handlerClose={hiddenModal} />)
            }
        }

        const getTask = async () => {
            let data
            if (props?.route?.params?.filter && props?.route?.params?.type !== 1) {
                data = await Task.getByType(props?.route?.params?.type)
            } else {
                data = await Task.get()
            }
            const stat = await Task.getStats()
            setStatistics(stat[0])
            setTasks(data)
        }
        useEffect(() => {
            getTask()
        }, [])
        const handlerCompleteTask = async () => {
            if (taskSelected.type == 2) {
                Alert.alert('The task has already been completed')
                return
            }
            await Task.completeTask(taskSelected.id)
            hiddenModal()
            getTask()
        }
        const handlerDeleteTask = () => {
            Alert.alert(
                "Cuidado",
                "¿Estás seguro que desear eliminar esta tarea?",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    {
                        text: "Yes, delete this.", onPress: async () => {
                            await Task.delete(taskSelected.id)
                            hiddenModal()
                            getTask()
                        }
                    }
                ]
            )
        }
        return (
            <>
                <Component statistics={statistics} setTasks={setTasks} getTask={getTask} tasks={tasks} hanldeAction={hanldeAction} data={props.data} />
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
