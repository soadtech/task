import React, { useRef, useState } from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import { Modalize } from 'react-native-modalize';
import CardTypeSaveTask from '../components/CardTypeSaveTask';
import CustomInput from '../components/CustomInput';
import HeaderMoalize from '../containers/Home/ActionsViews/Header';
import EditTask from '../containers/Tasks/components/EditTask';

const INITIAL_HEIGHT_MODALIZE = 140
const withTask = (Component) => {
    function WrapperChildren (props) {
        const [action, setAction] = useState(0)
        const [heightModalize, setHeightModalize] = useState(INITIAL_HEIGHT_MODALIZE)
        const modalizeRef = useRef(null);

        const hanldeAction = () => {
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
                                <CardTypeSaveTask handler={() => { hiddenModal() }} text='Complete' icon='https://image.flaticon.com/icons/png/512/157/157977.png' />
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
        return (
            <>
                <Component hanldeAction={hanldeAction} data={props.data} />
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
