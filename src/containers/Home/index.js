import React, { useRef, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { styles } from './styles'
import { Modalize } from 'react-native-modalize';
import { stylesGlobal } from '../../styles'
import Header from '../../components/Header'
import HeaderMoalize from './ActionsViews/Header'
import CardCategory from '../../components/CardCategory'
import TextStrong from '../../components/TextStrong'
import TaskList from '../../components/TaskList'
import FloatingButton from '../../components/FloatingButton'
import CardTypeSaveTask from '../../components/CardTypeSaveTask'
import AddTask from './ActionsViews/AddTask'
import AddTaskRandom from './ActionsViews/AddTaskRandom';

const data = [
    {
        id: '1',
        name: 'Ir al super',
        description: 'Comprar una libra de arroz',
        status: 1
    },
    {
        id: '2',
        name: 'Ir al super',
        description: 'Comprar una libra de arroz',
        status: 1
    },
    {
        id: '3',
        name: 'Ir al super',
        description: 'Comprar una libra de arroz',
        status: 1
    },
    {
        id: '4',
        name: 'Ir al super',
        description: 'Comprar una libra de arroz',
        status: 1
    },
]

const INITIAL_HEIGHT_MODALIZE = 140
export default function Home () {
    const [heightModalize, setHeightModalize] = useState(INITIAL_HEIGHT_MODALIZE)
    const [action, setAction] = useState(0)
    const modalizeRef = useRef(null);

    const onOpen = () => {
        modalizeRef.current?.open();
    };

    const renderAction = (st) => {
        switch (st) {
            case 0:
                return (
                    <>
                        <View>
                            <CardTypeSaveTask handler={() => { setHeightModalize(500); setAction(1) }} text='Manual' icon='https://image.flaticon.com/icons/png/512/2554/2554339.png' />
                        </View>
                        <View>
                            <CardTypeSaveTask handler={() => { setHeightModalize(200); setAction(2) }} text='Random' icon='https://image.flaticon.com/icons/png/512/138/138409.png' />
                        </View>
                    </>
                )
            case 1:
                return (<AddTask st={st} handlerClose={() => { setAction(0); setHeightModalize(INITIAL_HEIGHT_MODALIZE); modalizeRef.current?.close(); }} handlerBack={() => { setAction(0); setHeightModalize(INITIAL_HEIGHT_MODALIZE) }} />)
            case 2:
                return (<AddTaskRandom />)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Header />

                <View style={styles.containerCardsCategory}>
                    <View style={{ marginBottom: 20 }}>
                        <TextStrong size={40}>Your task</TextStrong>
                    </View>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ flex: 1, width: '100%' }}>
                        <CardCategory cant='14' icon='https://image.flaticon.com/icons/png/512/1827/1827144.png' name='All' />

                        <CardCategory cant='8' icon='https://image.flaticon.com/icons/png/512/190/190411.png' name='Complete' />

                        <CardCategory cant='6' icon='https://image.flaticon.com/icons/png/512/2314/2314433.png' name='Finished' />
                    </ScrollView>
                </View>
            </View>
            <View style={{ flex: 1, marginTop: '20%', paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 23 }}>Recent task</Text>
                <View style={{ flex: 1, }}>
                    <TaskList data={data} />
                </View>

                <FloatingButton handler={onOpen} />
            </View>
            <Modalize modalHeight={heightModalize} ref={modalizeRef}>
                <HeaderMoalize state={action} handlerBack={() => { setAction(0); setHeightModalize(INITIAL_HEIGHT_MODALIZE) }} handlerClose={() => modalizeRef.current?.close()} />
                <View style={stylesGlobal.flexRow}>
                    {renderAction(action)}
                </View>
            </Modalize>
        </View>
    )
}
